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

  // c_fill,g_auto = Cloudinary AI crops to the requested dimensions, keeping the
  // most visually interesting content (operators, equipment) in frame.
  // This eliminates manual cropping and fixes portrait-in-landscape-container issues.
  const params = ['f_auto', 'c_fill', 'g_auto', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${src}`;
}
