import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} - VoiceAssist Blog`,
    description: post.description,
  };
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  const processInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      if (boldMatch && (!linkMatch || (boldMatch.index ?? 0) < (linkMatch.index ?? 0))) {
        const beforeBold = remaining.slice(0, boldMatch.index);
        if (beforeBold) parts.push(beforeBold);
        parts.push(<strong key={key++}>{boldMatch[1]}</strong>);
        remaining = remaining.slice((boldMatch.index ?? 0) + boldMatch[0].length);
      } else if (linkMatch) {
        const beforeLink = remaining.slice(0, linkMatch.index);
        if (beforeLink) parts.push(beforeLink);
        parts.push(
          <a key={key++} href={linkMatch[2]} className="text-[var(--primary)] hover:underline" target="_blank" rel="noopener noreferrer">
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.slice((linkMatch.index ?? 0) + linkMatch[0].length);
      } else {
        parts.push(remaining);
        break;
      }
    }

    return parts;
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc list-inside mb-4 text-[var(--muted)] space-y-1">
          {listItems.map((item, i) => (
            <li key={i}>{processInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-[var(--foreground)] mt-8 mb-4">
          {processInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">
          {processInline(line.slice(3))}
        </h2>
      );
    } else if (line.match(/^[-*] /)) {
      inList = true;
      listItems.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(
        <p key={i} className="text-[var(--muted)] mb-4 leading-relaxed">
          {processInline(line)}
        </p>
      );
    }
  }

  flushList();

  return <div className="prose-invert">{elements}</div>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="border-b border-[var(--muted)]/10 px-6 py-4">
        <Link href="/blog" className="text-[var(--foreground)] font-semibold hover:text-[var(--primary)]">
          ← Back to Blog
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <time className="text-sm text-[var(--muted)]">{post.date}</time>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mt-4 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--muted)]">{post.description}</p>
        </header>

        <MarkdownContent content={post.content} />

        <div className="mt-16 pt-8 border-t border-[var(--muted)]/10">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
            Try Strawberry
          </h3>
          <p className="text-[var(--muted)] mb-4">
            Experience the future of voice AI on Android with our open-source assistant.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--background)] rounded-full font-semibold hover:brightness-110 transition-all"
          >
            Download APK
          </Link>
        </div>
      </article>
    </div>
  );
}
