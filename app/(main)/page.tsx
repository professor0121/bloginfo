import type { Metadata } from 'next';
import Link from 'next/link';
import { getFeaturedPosts, getPosts } from '@/lib/mdx/getPosts';
import { FeaturedPosts } from '@/components/blog/FeaturedPosts';
import { PostList } from '@/components/blog/PostList';
import { Newsletter } from '@/components/layout/Newsletter';
import { AdBanner } from '@/components/ads/AdBanner';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo/metadata';
import { RiArrowRightLine, RiCodeSSlashLine, RiRobotLine, RiSearchEyeLine, RiBookOpenLine } from 'react-icons/ri';

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
});

export const revalidate = 3600;

const categories = [
  {
    icon: <RiRobotLine className="h-6 w-6" />,
    label: 'AI',
    description: 'Machine learning, LLMs, and AI tools',
    href: '/blog/category/ai',
    color: 'bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
  },
  {
    icon: <RiCodeSSlashLine className="h-6 w-6" />,
    label: 'Next.js',
    description: 'App Router, RSC, performance & more',
    href: '/blog/category/nextjs',
    color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    icon: <RiSearchEyeLine className="h-6 w-6" />,
    label: 'SEO',
    description: 'Technical SEO and content strategy',
    href: '/blog/category/seo',
    color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  },
  {
    icon: <RiBookOpenLine className="h-6 w-6" />,
    label: 'Tutorials',
    description: 'Step-by-step guides for developers',
    href: '/blog/category/tutorials',
    color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
  },
];

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const latestPosts = getPosts().slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 text-sm font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {siteConfig.tagline}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            Insights for{' '}
            <span className="gradient-text">modern developers</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/blog" size="lg">
              Browse all posts
              <RiArrowRightLine className="h-5 w-5" />
            </Button>
            <Button href="/blog/search" variant="outline" size="lg">
              Search articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900 hover:shadow-md transition-all duration-200"
              >
                <div className={`inline-flex p-2.5 rounded-lg mb-3 ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <AdBanner />
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedPosts posts={featuredPosts} />
          </div>
        </section>
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <section className="py-16 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Latest Articles
              </h2>
              <Button href="/blog" variant="ghost" size="sm">
                View all
                <RiArrowRightLine className="h-4 w-4" />
              </Button>
            </div>
            <PostList posts={latestPosts} />
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter variant="section" />
        </div>
      </section>
    </div>
  );
}
