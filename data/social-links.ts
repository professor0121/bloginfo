export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'Twitter / X', href: 'https://twitter.com/devinsights', icon: 'twitter' },
  { label: 'GitHub', href: 'https://github.com/devinsights', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/devinsights', icon: 'linkedin' },
  { label: 'RSS Feed', href: '/blog/rss.xml', icon: 'rss' },
];
