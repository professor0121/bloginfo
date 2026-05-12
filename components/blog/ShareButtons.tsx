'use client';

import { useState } from 'react';
import { RiTwitterXLine, RiLinkedinLine, RiLinksLine, RiCheckLine } from 'react-icons/ri';
import { Tooltip } from '@/components/ui/Tooltip';
import { cn } from '@/lib/utils';
import { trackShare } from '@/lib/analytics/events';

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
    trackShare(url, 'twitter');
  };

  const shareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    trackShare(url, 'linkedin');
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    trackShare(url, 'copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const btnClass =
    'p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors';

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <span className="text-xs text-slate-500 mr-1">Share:</span>
      <Tooltip content="Share on X / Twitter">
        <button onClick={shareTwitter} className={btnClass} aria-label="Share on Twitter">
          <RiTwitterXLine className="h-4 w-4" />
        </button>
      </Tooltip>
      <Tooltip content="Share on LinkedIn">
        <button onClick={shareLinkedIn} className={btnClass} aria-label="Share on LinkedIn">
          <RiLinkedinLine className="h-4 w-4" />
        </button>
      </Tooltip>
      <Tooltip content={copied ? 'Copied!' : 'Copy link'}>
        <button onClick={copyLink} className={btnClass} aria-label="Copy link">
          {copied ? (
            <RiCheckLine className="h-4 w-4 text-green-500" />
          ) : (
            <RiLinksLine className="h-4 w-4" />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
