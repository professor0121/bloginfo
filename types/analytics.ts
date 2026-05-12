export type AnalyticsEvent =
  | 'page_view'
  | 'post_view'
  | 'search'
  | 'newsletter_signup'
  | 'share'
  | 'ad_click'
  | 'scroll_depth'
  | 'reading_complete'
  | 'outbound_click';

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PixelEvent {
  event: string;
  data?: Record<string, unknown>;
}
