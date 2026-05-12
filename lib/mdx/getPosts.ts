
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { BlogPost } from "@/types/blog";

const BLOGS_PATH = path.join(process.cwd(), "content/blogs");

export function getPosts(): BlogPost[] {
  // read all files
  const files = fs.readdirSync(BLOGS_PATH);

  // filter only mdx files
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  // map posts
  const posts = mdxFiles.map((file) => {
    const filePath = path.join(BLOGS_PATH, file);

    // read file content
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // parse frontmatter
    const { data, content } = matter(fileContent);

    // generate slug
    const slug = file.replace(".mdx", "");

    return {
      slug,
      content,
      readingTime: readingTime(content).text,

      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      image: data.image,
      mediaImages:data.mediaImages||[],
      published: data.published,
      featured: data.featured,
      author: data.author,
    };
  });

  // sort latest first
  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}