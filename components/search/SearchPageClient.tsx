'use client';

import { useSearch } from '@/hooks/useSearch';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import type { SearchIndexItem, PostCategory } from '@/types/blog';
import { CATEGORY_LABELS } from '@/lib/utils/constants';
import { cn } from '@/lib/utils';

const CATEGORIES: Array<{ value: PostCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'ai', label: CATEGORY_LABELS.ai },
  { value: 'nextjs', label: CATEGORY_LABELS.nextjs },
  { value: 'seo', label: CATEGORY_LABELS.seo },
  { value: 'tutorials', label: CATEGORY_LABELS.tutorials },
];

interface SearchPageClientProps {
  index: SearchIndexItem[];
}

export function SearchPageClient({ index }: SearchPageClientProps) {
  const { query, setQuery, category, setCategory, results, isSearching } = useSearch(index);

  return (
    <div className="space-y-6">
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search articles, topics, tags..."
      />

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={cn(
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
              category === cat.value
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="min-h-64">
        {isSearching ? (
          <SearchResults results={results} query={query} />
        ) : (
          <div className="grid gap-3">
            {results.slice(0, 20).map((item) => (
              <SearchResultCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchResultCard({ item }: { item: SearchIndexItem }) {
  return (
    <a
      href={`/blog/${item.slug}`}
      className="group flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900 transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
          {CATEGORY_LABELS[item.category] ?? item.category}
        </span>
        {item.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs text-slate-500">#{tag}</span>
        ))}
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
        {item.description}
      </p>
    </a>
  );
}
