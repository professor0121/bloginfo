import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { Newsletter } from '@/components/layout/Newsletter';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { absoluteUrl } from '@/lib/utils/url';

export const metadata: Metadata = buildMetadata({
  title: 'Newsletter',
  description: 'Subscribe to our newsletter and get the latest articles delivered to your inbox.',
  path: '/newsletter',
});

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <BreadcrumbSchema items={[
        { name: 'Home', url: absoluteUrl('/') },
        { name: 'Newsletter', url: absoluteUrl('/newsletter') },
      ]} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Stay in the Loop
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Join thousands of developers getting the latest articles on AI, Next.js, and web development.
        </p>
      </div>

      <Newsletter variant="section" />

      <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: '📬', title: 'Weekly Digest', desc: 'Get a curated list of the best articles every week' },
          { icon: '🚫', title: 'No Spam', desc: 'We respect your inbox. Unsubscribe anytime.' },
          { icon: '🎯', title: 'Focused Content', desc: 'Only the most relevant articles for developers' },
        ].map((feature) => (
          <div key={feature.title} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{feature.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
