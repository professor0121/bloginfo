export type AdPlacement = 'banner' | 'inline' | 'sidebar' | 'sticky';

export interface AdConfig {
  client: string;
  enabled: boolean;
  slots: {
    banner: string;
    inline: string;
    sidebar: string;
    sticky: string;
  };
}

export interface AdProps {
  placement: AdPlacement;
  className?: string;
}
