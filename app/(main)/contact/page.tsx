import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/config/site';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { absoluteUrl } from '@/lib/utils/url';
import { ContactForm } from '@/components/shared/ContactForm';
import { RiMailLine, RiTwitterXLine, RiGithubLine } from 'react-icons/ri';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: `Get in touch with the ${siteConfig.name} team.`,
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: absoluteUrl('/') },
    { name: 'Contact', url: absoluteUrl('/contact') },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-12">
        {/* Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Other ways to reach us</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <RiMailLine className="h-5 w-5 shrink-0" />
                {siteConfig.author.email}
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <RiTwitterXLine className="h-5 w-5 shrink-0" />
                {siteConfig.author.twitter}
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <RiGithubLine className="h-5 w-5 shrink-0" />
                GitHub
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Response Time</h3>
            <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
              We typically respond within 24–48 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
