export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  team: {
    id: 'team',
    name: 'DevInsights Team',
    bio: 'We write about modern web development, AI, and everything in between.',
    avatar: 'https://i.pravatar.cc/96?u=devinsights-team',
    twitter: 'https://twitter.com/devinsights',
    github: 'https://github.com/devinsights',
  },
  alex: {
    id: 'alex',
    name: 'Alex Chen',
    bio: 'Full-stack developer specializing in Next.js and React. Passionate about performance and DX.',
    avatar: 'https://i.pravatar.cc/96?u=alex-chen',
    twitter: 'https://twitter.com/alexchen',
    github: 'https://github.com/alexchen',
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah Kim',
    bio: 'AI/ML engineer and technical writer. Building the future one model at a time.',
    avatar: 'https://i.pravatar.cc/96?u=sarah-kim',
    twitter: 'https://twitter.com/sarahkim',
  },
};

export function getAuthor(id: string): Author {
  return authors[id] ?? authors.team;
}
