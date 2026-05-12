import type { Metadata } from 'next';
import { getPostsByTag, getAllTags } from '@/lib/mdx/getPosts';
import { PostList } from '@/components/blog/PostList';
import { EmptyState } from '@/components/shared/EmptyState';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AdBanner } from '@/components/ads/AdBanner';
import { buildMetadata } from '@/lib/seo/metadata';
import { absoluteUrl } from '@/lib/utils/url';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ slug: tag.toLowerCase().replace(/\s+/g, '-') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = decodeURIComponent(slug).replace(/-/g, ' ');
  return buildMetadata({
    title: `#${tag} Articles`,
    description: `Browse all articles tagged with "${tag}" on DevInsights.`,
    path: `/blog/tag/${slug}`,
  });
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = decodeURIComponent(slug).replace(/-/g, ' ');
  const posts = getPostsByTag(tag);

  const breadcrumbs = [
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'Blog', url: absoluteUrl('/blog') },
    { name: `#${tag}`, url: absoluteUrl(`/blog/tag/${slug}`) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
          # {tag}
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Articles tagged &quot;{tag}&quot;
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {posts.length} article{posts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <AdBanner className="mb-10" />

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <EmptyState
          title={`No posts tagged "${tag}"`}
          description="Try browsing all posts or search for a different topic."
          action={{ label: 'Browse all posts', href: '/blog' }}
        />
      )}
    </div>
  );
}
