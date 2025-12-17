import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

interface FrontMatter {
  title?: string;
  description?: string;
  date?: string;
  slug?: string;
}

function parseFrontMatter(fileContent: string): { data: FrontMatter; content: string } {
  const lines = fileContent.split("\n");
  const data: FrontMatter = {};
  let contentStartIndex = 0;

  if (lines[0]?.trim() === "---") {
    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]?.trim() === "---") {
        endIndex = i;
        break;
      }
      const match = lines[i]?.match(/^(\w+):\s*(.*)$/);
      if (match) {
        const key = match[1] as keyof FrontMatter;
        const value = match[2]?.trim();
        if (key && value !== undefined) {
          data[key] = value;
        }
      }
    }
    if (endIndex !== -1) {
      contentStartIndex = endIndex + 1;
    }
  }

  const content = lines.slice(contentStartIndex).join("\n").trim();
  return { data, content };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = parseFrontMatter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}
