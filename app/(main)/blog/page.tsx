import type { Metadata } from 'next';
import { getPosts, paginatePosts } from '@/lib/mdx/getPosts';
import { FeaturedPosts } from '@/components/blog/FeaturedPosts';
import { PostList } from '@/components/blog/PostList';
import { Pagination } from '@/components/shared/Pagination';
import { EmptyState } from '@/components/shared/EmptyState';
import { AdBanner } from '@/components/ads/AdBanner';
import { buildMetadata } from '@/lib/seo/metadata';
import { POSTS_PER_PAGE } from '@/config/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Explore articles on AI, Next.js, SEO, and programming tutorials.',
  path: '/blog',
});

export const revalidate = 3600;

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10));

  const allPosts = getPosts();
  const featuredPosts = allPosts.filter((p) => p.featured).slice(0, 3);
  const showFeatured = currentPage === 1 && featuredPosts.length > 0;

  const { posts, totalPages, total } = paginatePosts(allPosts, currentPage, POSTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Posts (first page only) */}
      {showFeatured && (
        <div className="mb-16">
          <FeaturedPosts posts={featuredPosts} />
        </div>
      )}

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {currentPage > 1 ? `All Posts — Page ${currentPage}` : 'All Posts'}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {total} article{total !== 1 ? 's' : ''} published
        </p>
      </div>

      <AdBanner className="mb-10" />

      {posts.length > 0 ? (
        <>
          <PostList posts={posts} />
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          </div>
        </>
      ) : (
        <EmptyState
          title="No posts yet"
          description="Check back soon — new content is on the way!"
          action={{ label: 'Go home', href: '/' }}
        />
      )}
    </div>
  );
}
