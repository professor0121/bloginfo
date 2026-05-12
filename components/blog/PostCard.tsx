import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { formatDateShort } from '@/lib/utils/date';
import type { BlogPost } from '@/types/blog';
import { CategoryBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';
import { RiArrowRightLine } from 'react-icons/ri';

interface PostCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export function PostCard({ post, variant = 'default', className }: PostCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900 transition-all duration-200',
          className
        )}
      >
        {post.image && (
          <div className="shrink-0 overflow-hidden rounded-lg w-20 h-20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex flex-col justify-between min-w-0">
          <div>
            <CategoryBadge category={post.category} linkable={false} />
            <h3 className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {post.title}
            </h3>
          </div>
          <ReadingTime readingTime={post.readingTime} className="text-xs" />
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-300',
          className
        )}
      >
        <div className="relative overflow-hidden h-56">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-violet-600" />
          )}
          <div className="absolute top-4 left-4">
            <CategoryBadge category={post.category} linkable={false} />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm line-clamp-3 flex-1">
            {post.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>{formatDateShort(post.date)}</span>
            <ReadingTime readingTime={post.readingTime} className="text-xs" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200',
        className
      )}
    >
      <div className="relative overflow-hidden h-48">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-300 dark:text-slate-600">
              {post.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={post.category} linkable={false} />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 flex-1">
          {post.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{formatDateShort(post.date)}</span>
            <span>·</span>
            <ReadingTime readingTime={post.readingTime} className="text-xs" />
          </div>
          <RiArrowRightLine className="h-4 w-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
