import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { PostCategory } from '@/types/blog';
import { CATEGORY_LABELS } from '@/lib/utils/constants';

const categoryStyles: Record<PostCategory, string> = {
  ai: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/50',
  nextjs: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50',
  seo: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50',
  tutorials: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50',
};

interface CategoryBadgeProps {
  category: PostCategory;
  size?: 'sm' | 'md';
  linkable?: boolean;
  className?: string;
}

export function CategoryBadge({ category, size = 'sm', linkable = true, className }: CategoryBadgeProps) {
  const label = CATEGORY_LABELS[category] ?? category;
  const classes = cn(
    'inline-flex items-center rounded-full font-medium transition-colors',
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
    categoryStyles[category],
    className
  );

  if (linkable) {
    return (
      <Link href={`/blog/category/${category}`} className={classes}>
        {label}
      </Link>
    );
  }
  return <span className={classes}>{label}</span>;
}
