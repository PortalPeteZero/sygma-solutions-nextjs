'use client';
import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

const FALLBACK_IMAGE = 'CAT4-and-Genny-54';

export default function FallbackImage({ src, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
}
