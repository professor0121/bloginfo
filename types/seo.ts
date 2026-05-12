export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  keywords?: string[];
}

export interface OpenGraphMeta {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: { url: string; width: number; height: number; alt: string }[];
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface JsonLdSchema {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}
