import type { BlogPost } from '@/types/blog';
import { PostCard } from './PostCard';
import { cn } from '@/lib/utils';

interface PostListProps {
  posts: BlogPost[];
  className?: string;
}

export function PostList({ posts, className }: PostListProps) {
  if (!posts.length) return null;
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
