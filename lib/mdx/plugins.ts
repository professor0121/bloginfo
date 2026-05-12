import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

export const remarkPlugins = [remarkGfm];

export const rehypePlugins = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'prepend',
      properties: {
        className: ['anchor'],
        ariaLabel: 'Link to section',
      },
    },
  ],
  rehypeHighlight,
];
