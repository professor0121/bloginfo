import { siteConfig } from './site';

export const defaultMeta = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.author.twitter ?? '@devinsights',
    site: siteConfig.author.twitter ?? '@devinsights',
    cardType: 'summary_large_image',
  },
};

export const POSTS_PER_PAGE = 9;
export const FEATURED_POSTS_COUNT = 3;
export const RELATED_POSTS_COUNT = 3;
