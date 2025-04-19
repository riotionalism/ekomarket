import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/auth/login' || path === '/auth/register';
  const token = request.cookies.get('user')?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/checkout/:path*',
    '/auth/login',
    '/auth/register',
  ],
};
