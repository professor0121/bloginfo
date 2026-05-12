import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, PostCategory } from '@/types/blog';

const BLOGS_PATH = path.join(process.cwd(), 'content/blogs');

function getAllMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parsePost(filePath: string, slug: string): BlogPost | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      slug,
      content,
      readingTime: readingTime(content).text,
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? new Date().toISOString(),
      category: (data.category ?? 'tutorials') as PostCategory,
      tags: data.tags ?? [],
      image: data.image ?? '',
      published: data.published ?? false,
      featured: data.featured ?? false,
      author: data.author ?? 'team',
    };
  } catch {
    return null;
  }
}

export function getPost(slug: string): BlogPost | null {
  const normalizedSlug = slug.toLowerCase();

  // 1. Try direct path (content/blogs/<slug>.mdx)
  const directPath = path.join(BLOGS_PATH, `${normalizedSlug}.mdx`);
  if (fs.existsSync(directPath)) {
    return parsePost(directPath, normalizedSlug);
  }

  // 2. Search all subdirectories by filename
  const allFiles = getAllMdxFiles(BLOGS_PATH);
  const found = allFiles.find((f) => {
    const base = path.basename(f).replace(/\.(mdx|md)$/, '').toLowerCase();
    return base === normalizedSlug;
  });

  if (found) {
    return parsePost(found, normalizedSlug);
  }

  return null;
}
