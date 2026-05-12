import type { SearchIndexItem } from '@/types/blog';
import type { PostCategory } from '@/types/blog';

export function filterByCategory(
  items: SearchIndexItem[],
  category: PostCategory | 'all'
): SearchIndexItem[] {
  if (category === 'all') return items;
  return items.filter((item) => item.category === category);
}

export function filterByTag(items: SearchIndexItem[], tag: string): SearchIndexItem[] {
  if (!tag) return items;
  return items.filter((item) =>
    item.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function filterPosts(
  items: SearchIndexItem[],
  opts: { category?: PostCategory | 'all'; tag?: string }
): SearchIndexItem[] {
  let results = items;
  if (opts.category) results = filterByCategory(results, opts.category);
  if (opts.tag) results = filterByTag(results, opts.tag);
  return results;
}
