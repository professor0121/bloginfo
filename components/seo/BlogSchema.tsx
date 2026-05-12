import { JsonLd } from './JsonLd';
import { generateBlogPostSchema } from '@/lib/seo/generateSchema';
import type { BlogPost } from '@/types/blog';

export function BlogSchema({ post }: { post: BlogPost }) {
  return <JsonLd schema={generateBlogPostSchema(post)} />;
}
