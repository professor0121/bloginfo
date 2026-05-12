import { PostListSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse mb-3" />
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
      </div>
      <PostListSkeleton count={6} />
    </div>
  );
}
