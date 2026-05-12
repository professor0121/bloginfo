import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, PostCategory } from '@/types/blog';
import { sortByDate } from '@/lib/utils/date';

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

function fileToSlug(filePath: string): string {
  // Use flat slug (filename only) to match [slug] route
  return path.basename(filePath).replace(/\.(mdx|md)$/, '').toLowerCase();
}

export function getPosts(publishedOnly = true): BlogPost[] {
  const files = getAllMdxFiles(BLOGS_PATH);

  const posts = files
    .map((filePath) => {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        const slug = fileToSlug(filePath);

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
        } satisfies BlogPost;
      } catch {
        return null;
      }
    })
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => (publishedOnly ? p.published : true));

  return sortByDate(posts);
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getPosts().filter((p) => p.featured).slice(0, limit);
}

export function getPostsByCategory(category: PostCategory): BlogPost[] {
  return getPosts().filter((p) => p.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPosts().filter((p) =>
    p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllCategories(): PostCategory[] {
  const posts = getPosts();
  return [...new Set(posts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  const posts = getPosts();
  return [...new Set(posts.flatMap((p) => p.tags))].sort();
}

export function getAllSlugs(): string[] {
  return getPosts().map((p) => p.slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPosts().find((p) => p.slug === currentSlug);
  if (!currentPost) return [];

  return getPosts()
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const sharedTags = p.tags.filter((t) => currentPost.tags.includes(t)).length;
      const sameCategory = p.category === currentPost.category ? 1 : 0;
      return { post: p, score: sharedTags * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage: number
): { posts: BlogPost[]; totalPages: number; currentPage: number; total: number } {
  const total = posts.length;
  const totalPages = Math.ceil(total / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  return {
    posts: posts.slice(start, end),
    totalPages,
    currentPage,
    total,
  };
}
