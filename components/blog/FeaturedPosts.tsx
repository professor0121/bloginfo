'use client';

import type { BlogPost } from '@/types/blog';
import { PostCard } from './PostCard';
import { motion } from 'framer-motion';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts.length) return null;

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Featured Posts
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <PostCard post={post} variant="featured" className="h-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
