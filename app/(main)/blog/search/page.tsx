import type { Metadata } from 'next';
import { buildSearchIndex } from '@/lib/mdx/search-index';
import { buildMetadata } from '@/lib/seo/metadata';
import { SearchPageClient } from '@/components/search/SearchPageClient';

export const metadata: Metadata = buildMetadata({
  title: 'Search',
  description: 'Search all articles on DevInsights.',
  path: '/blog/search',
  noIndex: true,
});

export default function SearchPage() {
  const searchIndex = buildSearchIndex();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Search Articles
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          {searchIndex.length} articles indexed
        </p>
      </div>
      <SearchPageClient index={searchIndex} />
    </div>
  );
}
