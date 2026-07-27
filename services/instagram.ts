export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

/**
 * Fetches the live Instagram feed through the official Instagram Graph API.
 *
 * Requires INSTAGRAM_ACCESS_TOKEN (see README). Returns null when the token
 * is missing or the request fails, so the page can fall back to the manually
 * curated embeds in common/constants/creations.ts.
 */
export const getInstagramFeed = async (
  limit = 12,
): Promise<InstagramPost[] | null> => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${limit}&access_token=${token}`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return null;

    const data = (await response.json()) as { data?: InstagramPost[] };
    return data.data?.length ? data.data : null;
  } catch {
    return null;
  }
};
