import { getPosts } from './getPosts';
import type { SearchIndexItem } from '@/types/blog';
import { stripMdx } from '@/lib/utils/string';

export function buildSearchIndex(): SearchIndexItem[] {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    tags: post.tags,
    content: stripMdx(post.content).slice(0, 500),
  }));
}
