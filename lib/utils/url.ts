import { siteConfig } from '@/config/site';

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getBlogUrl(slug: string): string {
  return `/blog/${slug}`;
}

export function getCategoryUrl(category: string): string {
  return `/blog/category/${category}`;
}

export function getTagUrl(tag: string): string {
  return `/blog/tag/${encodeURIComponent(tag.toLowerCase())}`;
}

export function getSearchUrl(query: string): string {
  return `/blog/search?q=${encodeURIComponent(query)}`;
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}
