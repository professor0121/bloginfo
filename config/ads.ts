import type { AdConfig } from '@/types/ads';

export const adsConfig: AdConfig = {
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? 'ca-pub-XXXXXXXXXXXXXXXX',
  enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
  slots: {
    banner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER ?? '1234567890',
    inline: process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? '0987654321',
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? '1122334455',
    sticky: process.env.NEXT_PUBLIC_ADSENSE_SLOT_STICKY ?? '5544332211',
  },
};
