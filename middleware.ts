import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // API rate limiting hint (implement proper rate limiting with Upstash/Redis in production)
  if (pathname.startsWith('/api/')) {
    response.headers.set('X-RateLimit-Policy', '100 requests per minute');
  }

  // Redirect old blog paths if needed
  if (pathname === '/articles' || pathname === '/posts') {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
