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
     * Skip all paths that should not be processed by middleware
     */
    '/((?!_next|api|favicon.ico).*)',
  ],
} 