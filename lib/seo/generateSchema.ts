import { siteConfig } from '@/config/site';
import type { BlogPost } from '@/types/blog';
import { absoluteUrl } from '@/lib/utils/url';
import { formatDateISO } from '@/lib/utils/date';
import { getAuthor } from '@/data/authors';

export function generateBlogPostSchema(post: BlogPost) {
  const author = getAuthor(post.author);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? absoluteUrl(post.image) : absoluteUrl(siteConfig.ogImage),
    datePublished: formatDateISO(post.date),
    dateModified: formatDateISO(post.date),
    author: {
      '@type': 'Person',
      name: author.name,
      url: absoluteUrl('/about'),
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon/logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/favicon/logo.png'),
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.author.email,
      contactType: 'customer support',
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/blog/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
