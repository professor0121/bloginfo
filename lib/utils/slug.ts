import { slugify } from './string';

export function createSlug(text: string): string {
  return slugify(text);
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function categoryToSlug(category: string): string {
  return slugify(category);
}

export function tagToSlug(tag: string): string {
  return slugify(tag);
}
