import { SiInstagram } from "react-icons/si";

import {
  INSTAGRAM,
  INSTAGRAM_POSTS,
  getInstagramShortcode,
} from "@/common/constants/creations";
import { getInstagramFeed } from "@/services/instagram";

import InstagramGrid from "./InstagramGrid";
import InstagramProfileCard from "./InstagramProfileCard";

const Creations = async () => {
  // Live feed when INSTAGRAM_ACCESS_TOKEN is set, curated embeds otherwise.
  const feed = await getInstagramFeed();
  const embeds = INSTAGRAM_POSTS.map(getInstagramShortcode);
  const postCount = feed?.length ?? embeds.length;

  return (
    <section className="space-y-6">
      <InstagramProfileCard postCount={postCount} />

      {feed ? (
        <InstagramGrid posts={feed} />
      ) : embeds.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {embeds.map((shortcode) => (
            <div
              key={shortcode}
              className="overflow-hidden rounded-xl border-[1.5px] border-neutral-300 dark:border-[#333333]"
            >
              <iframe
                src={`https://www.instagram.com/p/${shortcode}/embed`}
                title={`Instagram post ${shortcode}`}
                loading="lazy"
                scrolling="no"
                className="h-[560px] w-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-neutral-400 py-14 text-center dark:border-neutral-700">
          <SiInstagram size={28} className="text-neutral-500" />
          <a
            href={INSTAGRAM.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View @{INSTAGRAM.username} on Instagram
          </a>
        </div>
      )}
    </section>
  );
};

export default Creations;
