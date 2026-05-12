import { event } from './google';

export const trackPostView = (slug: string, title: string) =>
  event('post_view', { slug, title, content_type: 'blog_post' });

export const trackSearch = (query: string, resultsCount: number) =>
  event('search', { search_term: query, results_count: resultsCount });

export const trackNewsletterSignup = (source: string) =>
  event('newsletter_signup', { source });

export const trackShare = (slug: string, platform: string) =>
  event('share', { slug, platform, content_type: 'blog_post' });

export const trackAdClick = (placement: string) =>
  event('ad_click', { placement });

export const trackScrollDepth = (slug: string, depth: number) =>
  event('scroll_depth', { slug, depth_percent: depth });

export const trackReadingComplete = (slug: string) =>
  event('reading_complete', { slug });

export const trackOutboundClick = (url: string) =>
  event('click', { event_category: 'outbound', event_label: url });
