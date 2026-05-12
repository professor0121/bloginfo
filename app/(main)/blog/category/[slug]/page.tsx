import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllCategories } from '@/lib/mdx/getPosts';
import { PostList } from '@/components/blog/PostList';
import { EmptyState } from '@/components/shared/EmptyState';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AdBanner } from '@/components/ads/AdBanner';
import { buildMetadata } from '@/lib/seo/metadata';
import { absoluteUrl } from '@/lib/utils/url';
import { CATEGORY_LABELS } from '@/lib/utils/constants';
import type { PostCategory } from '@/types/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const VALID_CATEGORIES: PostCategory[] = ['ai', 'nextjs', 'seo', 'tutorials'];

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug] ?? slug;
  return buildMetadata({
    title: `${label} Articles`,
    description: `Browse all ${label} articles on DevInsights.`,
    path: `/blog/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  if (!VALID_CATEGORIES.includes(slug as PostCategory)) {
    notFound();
  }

  const posts = getPostsByCategory(slug as PostCategory);
  const label = CATEGORY_LABELS[slug] ?? slug;

  const breadcrumbs = [
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'Blog', url: absoluteUrl('/blog') },
    { name: label, url: absoluteUrl(`/blog/category/${slug}`) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          {label}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
        </p>
      </div>

      <AdBanner className="mb-10" />

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <EmptyState
          title={`No ${label} posts yet`}
          description="Check back soon for new articles in this category."
          action={{ label: 'Browse all posts', href: '/blog' }}
        />
      )}
    </div>
  );
}
