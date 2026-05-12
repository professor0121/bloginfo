import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { absoluteUrl } from '@/lib/utils/url';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}.`,
  path: '/privacy-policy',
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BreadcrumbSchema items={[
        { name: 'Home', url: absoluteUrl('/') },
        { name: 'Privacy Policy', url: absoluteUrl('/privacy-policy') },
      ]} />

      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Privacy Policy</h1>
      <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">1. Information We Collect</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us. This may include your email address, name, and message content.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-3">
            We also automatically collect certain information when you visit our website, including log data (IP address, browser type, pages visited), and usage data through analytics services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>To send newsletter updates (only with your explicit consent)</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze traffic and improve our website</li>
            <li>To display relevant advertisements via Google AdSense</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">3. Cookies & Tracking</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            We use cookies and similar tracking technologies to analyze website traffic (Google Analytics), deliver personalized ads (Google AdSense), and track conversions (Meta Pixel). You can control cookie preferences via your browser settings or our cookie consent banner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">4. Third-Party Services</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            We use the following third-party services: Google Analytics, Google AdSense, and Meta Pixel. Each of these services has their own privacy policy governing the use of your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">5. Data Retention</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            We retain personal data only as long as necessary to fulfill the purposes described in this policy, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">6. Your Rights</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Depending on your location, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at{' '}
            <a href={`mailto:${siteConfig.author.email}`} className="text-indigo-600 dark:text-indigo-400 underline">
              {siteConfig.author.email}
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">7. Contact</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            For privacy-related questions, contact us at{' '}
            <a href={`mailto:${siteConfig.author.email}`} className="text-indigo-600 dark:text-indigo-400 underline">
              {siteConfig.author.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
