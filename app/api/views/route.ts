import { NextRequest, NextResponse } from 'next/server';

// In-memory store for development. Replace with a database (e.g. Vercel KV, PlanetScale, Upstash) for production.
const viewStore = new Map<string, number>();

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
  }
  const views = viewStore.get(slug) ?? 0;
  return NextResponse.json({ slug, views });
}

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json() as { slug?: string };

    // Also support query param for backward compat
    const resolvedSlug = slug ?? request.nextUrl.searchParams.get('slug');

    if (!resolvedSlug) {
      return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    const current = viewStore.get(resolvedSlug) ?? 0;
    const updated = current + 1;
    viewStore.set(resolvedSlug, updated);

    // TODO: Replace with persistent storage:
    // await kv.incr(`views:${resolvedSlug}`);

    return NextResponse.json({ slug: resolvedSlug, views: updated });
  } catch (error) {
    console.error('[Views] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
