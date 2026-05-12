export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export function stripMdx(mdx: string): string {
  return mdx
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/[*_~]/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\n{2,}/g, ' ')
    .trim();
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

export function generateExcerpt(content: string, maxLength = 160): string {
  const plain = stripMdx(content);
  return truncate(plain, maxLength);
}
