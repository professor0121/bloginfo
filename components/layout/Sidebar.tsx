import type { BlogPost } from '@/types/blog';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { PostCard } from '@/components/blog/PostCard';
import { AdSidebar } from '@/components/ads/AdSidebar';
import type { TocItem } from '@/types/blog';
import { categoryNav } from '@/config/navigation';
import Link from 'next/link';

interface SidebarProps {
  tocItems?: TocItem[];
  relatedPosts?: BlogPost[];
}

export function Sidebar({ tocItems = [], relatedPosts = [] }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {tocItems.length > 0 && (
        <div className="sticky top-20 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <TableOfContents items={tocItems} />
        </div>
      )}

      <AdSidebar />

      {relatedPosts.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Related
          </h3>
          <div className="space-y-3">
            {relatedPosts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
          </div>
        </div>
      )}

      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {categoryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
