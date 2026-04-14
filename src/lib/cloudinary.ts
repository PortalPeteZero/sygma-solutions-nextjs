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

  // c_limit just resizes without cropping -- source photos are 4:3 landscape
  // (Pete's phone). Containers match 4:3 so nothing gets cropped in CSS.
  // q_auto:eco = aggressive compression without visible quality loss, drops
  // image payload ~40% vs q_auto which helps slow connections.
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto:eco'}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${src}`;
}
