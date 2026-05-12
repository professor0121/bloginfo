import Fuse, { type IFuseOptions } from 'fuse.js';
import type { SearchIndexItem } from '@/types/blog';

export const FUSE_OPTIONS: IFuseOptions<SearchIndexItem> = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 2 },
    { name: 'tags', weight: 1.5 },
    { name: 'content', weight: 1 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
};

let fuseInstance: Fuse<SearchIndexItem> | null = null;

export function createFuseIndex(items: SearchIndexItem[]): Fuse<SearchIndexItem> {
  fuseInstance = new Fuse(items, FUSE_OPTIONS);
  return fuseInstance;
}

export function searchPosts(
  query: string,
  index: Fuse<SearchIndexItem>,
  limit = 20
): SearchIndexItem[] {
  if (!query.trim()) return [];
  const results = index.search(query, { limit });
  return results.map((r) => r.item);
}
