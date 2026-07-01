import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MDXDocument {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author?: string;
  content: string;
  [key: string]: any; // Allow other frontmatter fields
}

export function getMdxFiles(dir: string): MDXDocument[] {
  const fullPath = path.join(process.cwd(), "src/content", dir);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);

  const posts = files
    .filter((filename) => filename.endsWith(".mdx") || filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      return getMdxFileBySlug(dir, slug);
    })
    .filter((post): post is MDXDocument => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}

export function getMdxFileBySlug(dir: string, slug: string): MDXDocument | null {
  const fullPath = path.join(process.cwd(), "src/content", dir, `${slug}.mdx`);
  const fullPathMd = path.join(process.cwd(), "src/content", dir, `${slug}.md`);
  
  let fileContents = "";
  try {
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else if (fs.existsSync(fullPathMd)) {
      fileContents = fs.readFileSync(fullPathMd, "utf8");
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    ...data,
  };
}
