const CLOUD_NAME = 'dqf1mp7en';

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Local files (e.g. /logo.webp) bypass Cloudinary
  if (src.startsWith('/') || src.startsWith('http')) {
    return src;
  }

  // c_fill with g_auto:faces prioritises faces when present, falls back to
  // overall content-aware cropping otherwise. Keeps operators' heads visible
  // instead of cropping to hi-vis jackets (high-contrast regions).
  const params = ['f_auto', 'c_fill', 'g_auto:faces', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${src}`;
}
