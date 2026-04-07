import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CLOUDINARY_CLOUD = 'dqf1mp7en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect /images/* requests to Cloudinary CDN
  if (pathname.startsWith('/images/')) {
    // Extract just the filename (strip directory path and extension)
    const segments = pathname.split('/');
    const filenameWithExt = segments[segments.length - 1];
    const filename = filenameWithExt.replace(/\.[^.]+$/, '');

    if (filename) {
      // f_auto delivers the best format for the browser (avif/webp/jpg)
      // q_auto optimises quality vs size automatically
      const cloudinaryUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/f_auto,q_auto/${filename}`;
      return NextResponse.redirect(cloudinaryUrl, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/images/:path*',
};
