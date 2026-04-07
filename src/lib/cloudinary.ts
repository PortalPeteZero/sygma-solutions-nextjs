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

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${src}`;
}
