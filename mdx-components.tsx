import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-10 mb-4 scroll-mt-24 group"
      >
        <a href={`#${id}`} className="anchor no-underline">
          {children}
        </a>
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-2 scroll-mt-24"
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-slate-700 dark:text-slate-300 leading-8 my-5">{children}</p>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 underline underline-offset-2 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href ?? '#'}
          className="text-indigo-500 hover:text-indigo-400 underline underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="my-5 ml-6 list-disc space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 ml-6 list-decimal space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-indigo-500 pl-6 italic text-slate-600 dark:text-slate-400">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      if (className) {
        return (
          <code className={`${className} text-sm leading-6`}>{children}</code>
        );
      }
      return (
        <code className="px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-lg bg-[#1e1e2e] p-4 text-sm leading-6 shadow-lg">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-10 border-slate-200 dark:border-slate-800" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-slate-50 dark:bg-slate-800/50">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800">
        {children}
      </td>
    ),
    img: ({ src, alt, width, height }) => {
      if (!src) return null;
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={alt ?? ''}
            width={Number(width) || 800}
            height={Number(height) || 450}
            className="rounded-lg w-full object-cover"
          />
          {alt && (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
    ...components,
  };
}
