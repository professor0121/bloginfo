'use client';

import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { useSearch } from '@/hooks/useSearch';
import type { SearchIndexItem } from '@/types/blog';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [index, setIndex] = useState<SearchIndexItem[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    fetch('/api/search')
      .then((r) => r.json())
      .then((data) => setIndex(data))
      .catch(() => {/* silently fail */});
  }, [isOpen]);

  const { query, setQuery, results } = useSearch(index);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search" size="lg">
      <div className="space-y-4">
        <SearchBar value={query} onChange={setQuery} />
        <div className="max-h-96 overflow-y-auto">
          <SearchResults results={results} query={query} onClose={onClose} />
        </div>
      </div>
    </Modal>
  );
}
