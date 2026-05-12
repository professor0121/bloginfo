import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import { authors } from '@/data/authors';
import { Button } from '@/components/ui/Button';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { absoluteUrl } from '@/lib/utils/url';
import { RiTwitterXLine, RiGithubLine } from 'react-icons/ri';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: `Learn about ${siteConfig.name} — a modern blogging platform for developers.`,
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'About', url: absoluteUrl('/about') },
  ];

  const team = Object.values(authors);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-5xl mb-4 block">⟡</span>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          About {siteConfig.name}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Mission</h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          We believe every developer deserves access to high-quality, practical content. {siteConfig.name} is
          dedicated to publishing in-depth technical articles on AI, Next.js, SEO, and modern web development
          that help you build better software.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Whether you&apos;re a beginner or a seasoned engineer, our goal is to provide content that&apos;s
          actionable, accurate, and always up to date with the latest industry practices.
        </p>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">Meet the Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((author) => (
            <div
              key={author.id}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="h-16 w-16 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{author.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{author.bio}</p>
              <div className="flex gap-3 mt-4">
                {author.twitter && (
                  <a href={author.twitter} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                    <RiTwitterXLine className="h-4 w-4" />
                  </a>
                )}
                {author.github && (
                  <a href={author.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                    <RiGithubLine className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Have a question, suggestion, or want to contribute? We&apos;d love to hear from you.
        </p>
        <Button href="/contact" size="lg">Contact Us</Button>
      </section>
    </div>
  );
}
