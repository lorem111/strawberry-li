import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - VoiceAssist",
  description: "Articles about voice assistants, AI, Gemini API, and open-source development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="border-b border-[var(--muted)]/10 px-6 py-4">
        <Link href="/" className="text-[var(--foreground)] font-semibold hover:text-[var(--primary)]">
          ← Back to Home
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Blog</h1>
        <p className="text-[var(--muted)] mb-12">
          Insights on voice technology, AI development, and building open-source tools.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-xl bg-[var(--secondary)] border border-[var(--muted)]/10 hover:border-[var(--primary)]/30 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <time className="text-sm text-[var(--muted)]">{post.date}</time>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mt-2 mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[var(--muted)] line-clamp-2">{post.description}</p>
                <span className="inline-block mt-4 text-sm text-[var(--primary)] font-medium">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-[var(--muted)] text-center py-12">
            No posts yet. Check back soon!
          </p>
        )}
      </main>
    </div>
  );
}
