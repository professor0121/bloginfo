import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function buildMetadata({
  title,
  description,
  path = '/',
  ogImage,
  ogType = 'website',
  publishedTime,
  authors,
  tags,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const resolvedDesc = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;
  const image = ogImage
    ? `${siteConfig.url}${ogImage}`
    : `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    keywords: siteConfig.keywords,
    authors: authors?.map((a) => ({ name: a })) ?? [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDesc,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: ogType,
      images: [{ url: image, width: 1200, height: 630, alt: resolvedTitle }],
      ...(ogType === 'article' && {
        publishedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDesc,
      images: [image],
      creator: siteConfig.author.twitter,
      site: siteConfig.author.twitter,
    },
  };
}
