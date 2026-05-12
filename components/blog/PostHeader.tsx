import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils/date';
import { CategoryBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';
import { TagList } from './TagList';
import { getAuthor } from '@/data/authors';
import { ShareButtons } from './ShareButtons';
import { absoluteUrl } from '@/lib/utils/url';

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  const author = getAuthor(post.author);
  const postUrl = absoluteUrl(`/blog/${post.slug}`);

  return (
    <header className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <CategoryBadge category={post.category} size="md" />
        <ReadingTime readingTime={post.readingTime} />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-4">
        {post.title}
      </h1>

      <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
        {post.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {author.name}
            </p>
            <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
          </div>
        </div>
        <ShareButtons url={postUrl} title={post.title} />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-4">
          <TagList tags={post.tags} />
        </div>
      )}
    </header>
  );
}
