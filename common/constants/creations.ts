export const INSTAGRAM = {
  username: "e_techstudio",
  name: "E-Tech Studio",
  tagline: "Jasa Gambar Teknik 2D | 3D",
  profile_url: "https://www.instagram.com/e_techstudio/",
  description:
    "Design engineering work in progress — 3D models, renders, prototypes, and manufacturing shots from E-Tech Studio.",
};

/**
 * Posts shown on /creations when the live Instagram feed is not configured
 * (no INSTAGRAM_ACCESS_TOKEN). Paste the post URL of anything you want to
 * feature — post, reel, or IGTV:
 *
 *   "https://www.instagram.com/p/ABC123xyz/"
 *   "https://www.instagram.com/reel/DEF456uvw/"
 *
 * Each one renders through Instagram's official embed, so no API key or
 * access token is required. Leave the array empty to show only the profile
 * card and a link to the account.
 */
export const INSTAGRAM_POSTS: string[] = [];

export const getInstagramShortcode = (value: string) => {
  const match = value.match(/instagram\.com\/(?:p|reel|tv)\/([^/?#]+)/);
  return match ? match[1] : value.replace(/\/+$/, "");
};
