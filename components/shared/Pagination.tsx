import Link from 'next/link';
import { cn } from '@/lib/utils';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

export function Pagination({ currentPage, totalPages, basePath, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getUrl = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={cn('flex items-center justify-center gap-2', className)} aria-label="Pagination">
      <Link
        href={getUrl(currentPage - 1)}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
          currentPage <= 1
            ? 'pointer-events-none opacity-40 text-slate-400'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        )}
        aria-disabled={currentPage <= 1}
      >
        <RiArrowLeftLine className="h-4 w-4" />
        Previous
      </Link>

      <div className="flex gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={getUrl(page)}
            className={cn(
              'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              page === currentPage
                ? 'bg-indigo-600 text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            )}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={getUrl(currentPage + 1)}
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
          currentPage >= totalPages
            ? 'pointer-events-none opacity-40 text-slate-400'
            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        )}
        aria-disabled={currentPage >= totalPages}
      >
        Next
        <RiArrowRightLine className="h-4 w-4" />
      </Link>
    </nav>
  );
}
