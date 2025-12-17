import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const GEMINI_BRIDGE = path.join(__dirname, "gemini_bridge.py");
const POSTS_DIR = path.join(__dirname, "..", "content", "posts");

function callGemini(prompt: string, type: string = "text"): string {
  try {
    const escaped = prompt.replace(/"/g, '\"');
    const result = execSync(
      `python3 "${GEMINI_BRIDGE}" "${escaped}" -t ${type}`,
      { encoding: "utf-8", maxBuffer: 1024 * 1024 }
    );
    return result.trim();
  } catch (error) {
    console.error("Gemini call failed:", error);
    return "";
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  console.log("Generating SEO blog posts...\n");

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  console.log("Getting SEO keywords from Gemini...");
  const keywordsRaw = callGemini(
    "List 5 high-volume SEO keywords related to dog stress, dog anxiety, and calming anxious dogs. Return only a JSON array of strings.",
    "json"
  );

  let keywords: string[];
  try {
    keywords = JSON.parse(keywordsRaw);
  } catch {
    console.log("Using fallback keywords");
    keywords = [
      "dog anxiety symptoms",
      "how to calm a stressed dog",
      "dog stress relief techniques",
      "canine separation anxiety solutions",
      "natural remedies for anxious dogs",
    ];
  }

  console.log(`Keywords: ${keywords.join(", ")}\n`);

  for (const keyword of keywords) {
    const slug = slugify(keyword);
    const filePath = path.join(POSTS_DIR, `${slug}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`Skipping existing: ${slug}`);
      continue;
    }

    console.log(`Generating post for: "${keyword}"...`);

    const content = callGemini(
      `Write a 500-word SEO blog post about "${keyword}". Include an H1 title, useful information for dog owners, and a soft CTA mentioning our comprehensive PDF guide. Use markdown formatting with headers, bullet points where appropriate. Make it helpful and authoritative. Do not include any frontmatter.`,
      "text"
    );

    if (content) {
      const titleWords = keyword.split(" ").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      const today = new Date().toISOString().split("T")[0];
      const frontmatter = `---
title: "${titleWords}"
slug: "${slug}"
date: "${today}"
description: "Learn about ${keyword} and how to help your furry friend find peace."
---

`;
      fs.writeFileSync(filePath, frontmatter + content);
      console.log(`  Created: ${slug}.md`);
    }
  }

  console.log("\nBlog generation complete!");
}

main().catch(console.error);
