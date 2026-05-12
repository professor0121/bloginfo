'use client';

import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import type { SearchIndexItem, PostCategory } from '@/types/blog';
import { useDebounce } from './useDebounce';
import { FUSE_OPTIONS } from '@/lib/search/fuse';

export function useSearch(index: SearchIndexItem[]) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<PostCategory | 'all'>('all');
  const debouncedQuery = useDebounce(query, 300);

  const fuse = useMemo(() => new Fuse(index, FUSE_OPTIONS), [index]);

  const results = useMemo(() => {
    let items = index;
    if (category !== 'all') {
      items = items.filter((i) => i.category === category);
    }
    if (!debouncedQuery.trim()) return items.slice(0, 20);
    const fuseSource = category !== 'all'
      ? new Fuse(items, FUSE_OPTIONS)
      : fuse;
    return fuseSource.search(debouncedQuery, { limit: 20 }).map((r) => r.item);
  }, [debouncedQuery, category, fuse, index]);

  return { query, setQuery, category, setCategory, results, isSearching: !!debouncedQuery };
}
