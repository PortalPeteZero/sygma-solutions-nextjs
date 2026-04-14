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

  // c_limit just resizes without cropping. Source photos are 4:3 landscape
  // (Pete's phone). Components should use containers and Next.js
  // Image width/height matching the 4:3 natural aspect so nothing gets cropped
  // in CSS. Keeping server-side crops out of the loader prevents subject loss.
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${src}`;
}
