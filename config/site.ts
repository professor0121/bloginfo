import type { SiteConfig } from '@/types/config';

export const siteConfig: SiteConfig = {
  name: 'BlogInfo',
  tagline: 'Build. Learn. Ship.',
  description:
    'Modern technical blog for developers — covering AI, Next.js, SEO, and programming tutorials.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://devinsights.dev',
  ogImage: '/og/default.png',
  keywords: [
    'nextjs',
    'react',
    'typescript',
    'ai',
    'programming',
    'tutorials',
    'seo',
    'web development',
  ],
  links: {
    twitter: 'https://twitter.com/devinsights',
    github: 'https://github.com/devinsights',
    linkedin: 'https://linkedin.com/company/devinsights',
    rss: '/blog/rss.xml',
  },
  author: {
    name: 'Abhishek kushwaha',
    email: 'abhishekkushwahaak0121@gmail.com',
    twitter: '@devinsights',
  },
};
