import { trackEvent, trackCustomEvent } from './fbPixel';

export const pixelPageView = () => trackEvent('PageView');

export const pixelViewContent = (slug: string, title: string) =>
  trackEvent('ViewContent', {
    content_name: title,
    content_ids: [slug],
    content_type: 'blog_post',
  });

export const pixelLead = (source: string) =>
  trackEvent('Lead', { source });

export const pixelCompleteRegistration = () =>
  trackEvent('CompleteRegistration');

export const pixelSearch = (query: string) =>
  trackEvent('Search', { search_string: query });

export const pixelCustomShare = (slug: string, platform: string) =>
  trackCustomEvent('Share', { slug, platform });
