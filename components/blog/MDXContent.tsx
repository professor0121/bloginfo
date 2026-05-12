'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MDXContentProps {
  source: string;
  className?: string;
}

export default function MDXContent({ source, className }: MDXContentProps) {
  return (
    <div className={cn('prose-content', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'prepend', properties: { className: ['anchor'], ariaLabel: 'Link to section' } }],
          rehypeHighlight,
        ]}
        components={{
          h1: ({ children, id }) => (
            <h1 id={id} className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-10 mb-4 scroll-mt-24">
              {children}
            </h1>
          ),
          h2: ({ children, id }) => (
            <h2 id={id} className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mt-10 mb-4 scroll-mt-24 pb-2 border-b border-slate-200 dark:border-slate-800">
              {children}
            </h2>
          ),
          h3: ({ children, id }) => (
            <h3 id={id} className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-3 scroll-mt-24">
              {children}
            </h3>
          ),
          h4: ({ children, id }) => (
            <h4 id={id} className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-2 scroll-mt-24">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-700 dark:text-slate-300 leading-8 my-5 text-[1.0625rem]">{children}</p>
          ),
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http');
            if (isExternal) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-500 transition-colors">
                  {children}
                </a>
              );
            }
            return (
              <Link href={href ?? '#'} className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-500 transition-colors">
                {children}
              </Link>
            );
          },
          ul: ({ children }) => (
            <ul className="my-5 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-5 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-7 pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-indigo-500 pl-6 italic text-slate-600 dark:text-slate-400 bg-indigo-50/50 dark:bg-indigo-900/10 py-3 pr-4 rounded-r-lg">
              {children}
            </blockquote>
          ),
          code: ({ children, className: cls }) => {
            if (cls) {
              return <code className={`${cls} text-sm leading-6`}>{children}</code>;
            }
            return (
              <code className="px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 text-sm font-mono border border-slate-200 dark:border-slate-700">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl bg-[#1e1e2e] p-5 text-sm leading-6 shadow-lg border border-white/5">
              {children}
            </pre>
          ),
          hr: () => <hr className="my-10 border-slate-200 dark:border-slate-800" />,
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900 dark:text-slate-100">{children}</strong>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-50 dark:bg-slate-800/60">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800">{children}</td>
          ),
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <figure className="my-8">
                <img src={src} alt={alt ?? ''} className="rounded-xl w-full object-cover shadow-md" />
                {alt && <figcaption className="mt-2 text-center text-sm text-slate-500">{alt}</figcaption>}
              </figure>
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
