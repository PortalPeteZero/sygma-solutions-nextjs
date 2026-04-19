/** Shared metadata constants for all pages */

export const SITE_URL = 'https://sygma-solutions.com';
export const SITE_NAME = 'Sygma Solutions';
export const CLOUDINARY_BASE = 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill';

/** Default OG image -- used by all pages unless overridden */
export const DEFAULT_OG_IMAGE = {
  url: `${CLOUDINARY_BASE}/cat-34`,
  width: 1200,
  height: 630,
};

/** Build a full Cloudinary OG image object from a bare asset ID */
export function cloudinaryOgImage(assetId: string, alt?: string) {
  return {
    url: `${CLOUDINARY_BASE}/${assetId}`,
    width: 1200,
    height: 630,
    ...(alt ? { alt } : {}),
  };
}
