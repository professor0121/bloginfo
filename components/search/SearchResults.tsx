import Link from 'next/link';
import type { SearchIndexItem } from '@/types/blog';
import { CategoryBadge } from '@/components/blog/CategoryBadge';
import { EmptyState } from '@/components/shared/EmptyState';
import { RiArrowRightLine } from 'react-icons/ri';

interface SearchResultsProps {
  results: SearchIndexItem[];
  query: string;
  onClose?: () => void;
}

export function SearchResults({ results, query, onClose }: SearchResultsProps) {
  if (!query) return null;

  if (!results.length) {
    return (
      <EmptyState
        title="No results found"
        description={`No posts found for "${query}". Try different keywords.`}
      />
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500 px-1">
        {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
      </p>
      {results.map((item) => (
        <Link
          key={item.slug}
          href={`/blog/${item.slug}`}
          onClick={onClose}
          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <CategoryBadge category={item.category} linkable={false} />
            </div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
              {item.title}
            </p>
            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
          </div>
          <RiArrowRightLine className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 shrink-0 mt-1 transition-colors" />
        </Link>
      ))}
    </div>
  );
}
