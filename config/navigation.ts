import type { NavItem } from '@/types/config';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'RSS Feed', href: '/blog/rss.xml', external: true },
];

export const categoryNav: NavItem[] = [
  { label: 'AI', href: '/blog/category/ai' },
  { label: 'Next.js', href: '/blog/category/nextjs' },
  { label: 'SEO', href: '/blog/category/seo' },
  { label: 'Tutorials', href: '/blog/category/tutorials' },
];
