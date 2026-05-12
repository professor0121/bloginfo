export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://devinsights.dev',
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '',
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? '',
  adsenseEnabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  newsletterApiKey: process.env.NEWSLETTER_API_KEY ?? '',
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
} as const;
