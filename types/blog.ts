export interface BlogForntmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  mediaImages:string[],
  published: boolean;
  featured: boolean;
  author: string;
}

export interface BlogPost extends BlogForntmatter{
    slug:string,
    content:string,
    readingTime:string
}