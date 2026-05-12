export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: {
    twitter: string;
    github: string;
    linkedin?: string;
    rss: string;
  };
  author: {
    name: string;
    email: string;
    twitter?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
