export type PostCategory = 'ai' | 'nextjs' | 'seo' | 'tutorials';

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  category: PostCategory;
  tags: string[];
  image: string;
  published: boolean;
  featured: boolean;
  author: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface SearchIndexItem {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  tags: string[];
  content: string;
}
