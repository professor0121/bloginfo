export const BLOGS_DIR = 'content/blogs';
export const POSTS_PER_PAGE = 9;
export const FEATURED_COUNT = 3;
export const RELATED_COUNT = 3;
export const TOC_MIN_HEADINGS = 3;
export const SEARCH_DEBOUNCE_MS = 300;
export const MAX_SEARCH_RESULTS = 20;

export const CATEGORY_LABELS: Record<string, string> = {
  ai: 'AI',
  nextjs: 'Next.js',
  seo: 'SEO',
  tutorials: 'Tutorials',
};

export const CATEGORY_COLORS: Record<string, string> = {
  ai: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  nextjs: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  seo: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  tutorials: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
};
