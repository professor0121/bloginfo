import Script from 'next/script';
import { isAdsEnabled, adsConfig } from '@/lib/adsense';
import { getAdsenseScript } from '@/lib/adsense/inject';

export function AutoAds() {
  if (!isAdsEnabled()) return null;
  return (
    <>
      <Script
        async
        src={getAdsenseScript()}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="adsense-auto-ads" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "${adsConfig.client}",
            enable_page_level_ads: true
          });
        `}
      </Script>
    </>
  );
}
