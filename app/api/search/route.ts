import { NextResponse } from 'next/server';
import { buildSearchIndex } from '@/lib/mdx/search-index';

// Cache the search index at module level for performance
let cachedIndex: ReturnType<typeof buildSearchIndex> | null = null;

export async function GET() {
  try {
    if (!cachedIndex) {
      cachedIndex = buildSearchIndex();
    }
    return NextResponse.json(cachedIndex, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('[Search] Error building index:', error);
    return NextResponse.json([], { status: 500 });
  }
}
