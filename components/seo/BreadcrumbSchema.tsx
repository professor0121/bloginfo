import { JsonLd } from './JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  showVisual?: boolean;
}

export function BreadcrumbSchema({ items, showVisual = true }: BreadcrumbSchemaProps) {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema(items)} />
      {showVisual && (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          {items.map((item, i) => (
            <span key={item.url} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </nav>
      )}
    </>
  );
}
