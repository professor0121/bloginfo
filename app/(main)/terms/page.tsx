import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { absoluteUrl } from '@/lib/utils/url';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name}.`,
  path: '/terms',
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={[
        { name: 'Home', url: absoluteUrl('/') },
        { name: 'Terms of Service', url: absoluteUrl('/terms') },
      ]} />

      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Terms of Service</h1>
      <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="space-y-8">
        {[
          {
            title: '1. Acceptance of Terms',
            content: `By accessing and using ${siteConfig.name}, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree, please do not use our service.`,
          },
          {
            title: '2. Use of Content',
            content: 'All content published on this site is for informational purposes only. You may not reproduce, distribute, or create derivative works without explicit written permission.',
          },
          {
            title: '3. User Conduct',
            content: 'You agree not to use our services to violate any laws, infringe on intellectual property rights, distribute spam or malware, or engage in any harmful activities.',
          },
          {
            title: '4. Disclaimer of Warranties',
            content: 'Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or reliability of any content.',
          },
          {
            title: '5. Limitation of Liability',
            content: `${siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services.`,
          },
          {
            title: '6. External Links',
            content: 'Our site may contain links to external websites. We are not responsible for the content or privacy practices of those sites.',
          },
          {
            title: '7. Changes to Terms',
            content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.',
          },
          {
            title: '8. Contact',
            content: `For questions about these terms, contact us at ${siteConfig.author.email}.`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{section.title}</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
