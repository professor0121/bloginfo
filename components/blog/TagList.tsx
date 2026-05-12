import Link from 'next/link';
import { cn } from '@/lib/utils';
import { RiHashtag } from 'react-icons/ri';

interface TagListProps {
  tags: string[];
  linkable?: boolean;
  className?: string;
}

export function TagList({ tags, linkable = true, className }: TagListProps) {
  if (!tags.length) return null;
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => {
        const classes =
          'inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors';
        const slug = tag.toLowerCase().replace(/\s+/g, '-');
        if (linkable) {
          return (
            <Link key={tag} href={`/blog/tag/${slug}`} className={classes}>
              <RiHashtag className="h-3 w-3" />
              {tag}
            </Link>
          );
        }
        return (
          <span key={tag} className={classes}>
            <RiHashtag className="h-3 w-3" />
            {tag}
          </span>
        );
      })}
    </div>
  );
}
