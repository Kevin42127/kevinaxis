import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // 允许 iframe 嵌入
  response.headers.set('X-Frame-Options', 'ALLOWALL')
  response.headers.set('Content-Security-Policy', 'frame-ancestors *')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - /api (API routes)
     * - /_next/static (static files)
     * - /_next/image (image optimization files)
     * - /favicon.ico (favicon file)
     * - static assets (js, css, images, fonts)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)).*)',
  ],
} 