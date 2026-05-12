import path from 'path'
import fs from 'fs'
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOGS_PATH = path.join(process.cwd(), "content/blogs");

export function getPost(slug: string) {
  try {
    const filePath = path.join(BLOGS_PATH, `${slug.toLowerCase()}.mdx`);

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

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
      mediaImages: data.mediaImages || [],
      published: data.published,
      featured: data.featured,
      author: data.author,
    };
  } catch (err) {
    return null;
  }
}