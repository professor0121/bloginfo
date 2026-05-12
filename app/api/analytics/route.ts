import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const eventSchema = z.object({
  event: z.string().min(1).max(100),
  payload: z.record(z.string(), z.unknown()).optional(),
  slug: z.string().optional(),
  timestamp: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = eventSchema.parse(body);

    // TODO: Forward to your analytics pipeline (e.g. Segment, Mixpanel, custom DB)
    console.info('[Analytics] Event:', data.event, data.payload);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid event payload' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
