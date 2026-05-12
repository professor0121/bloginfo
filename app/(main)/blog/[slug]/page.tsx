import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/mdx/getPost';
import { getRelatedPosts, getAllSlugs } from '@/lib/mdx/getPosts';
import { extractToc } from '@/lib/mdx/toc';
import { buildMetadata } from '@/lib/seo/metadata';
import { PostHeader } from '@/components/blog/PostHeader';
import { PostHero } from '@/components/blog/PostHero';
import { PostContent } from '@/components/blog/PostContent';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { BlogSchema } from '@/components/seo/BlogSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Sidebar } from '@/components/layout/Sidebar';
import { AdInline } from '@/components/ads/AdInline';
import { Newsletter } from '@/components/layout/Newsletter';
import { absoluteUrl } from '@/lib/utils/url';
import MDXContent from '@/components/blog/MDXContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    ogImage: post.image || undefined,
    ogType: 'article',
    publishedTime: post.date,
    authors: [post.author],
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post || !post.published) {
    notFound();
  }

  const tocItems = extractToc(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);

  const breadcrumbs = [
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'Blog', url: absoluteUrl('/blog') },
    { name: post.category.charAt(0).toUpperCase() + post.category.slice(1), url: absoluteUrl(`/blog/category/${post.category}`) },
    { name: post.title, url: absoluteUrl(`/blog/${slug}`) },
  ];

  return (
    <>
      <ReadingProgress />
      <BlogSchema post={post} />
      <BreadcrumbSchema items={breadcrumbs} showVisual={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <BreadcrumbSchema items={breadcrumbs} showVisual />

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 xl:gap-16">
          {/* Main content */}
          <main className="min-w-0">
            <PostHeader post={post} />

            {post.image && <PostHero image={post.image} title={post.title} />}

            <PostContent>
              <MDXContent source={post.content} />
            </PostContent>

            <AdInline />

            <Newsletter variant="inline" className="mt-12" />
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Sidebar tocItems={tocItems} relatedPosts={relatedPosts} />
          </aside>
        </div>

        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
}
