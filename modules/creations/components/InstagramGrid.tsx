import Image from "next/image";
import { BsPlayFill as VideoIcon } from "react-icons/bs";
import { HiOutlineSquares2X2 as AlbumIcon } from "react-icons/hi2";

import type { InstagramPost } from "@/services/instagram";

/** Instagram-style square grid, rendered from the live Graph API feed. */
const InstagramGrid = ({ posts }: { posts: InstagramPost[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {posts.map((post) => {
        const src =
          post.media_type === "VIDEO"
            ? (post.thumbnail_url ?? post.media_url)
            : post.media_url;

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-800"
          >
            <Image
              src={src}
              alt={post.caption?.slice(0, 120) ?? "Instagram post"}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {post.media_type !== "IMAGE" && (
              <span className="absolute right-2 top-2 text-white drop-shadow">
                {post.media_type === "VIDEO" ? (
                  <VideoIcon size={20} />
                ) : (
                  <AlbumIcon size={18} />
                )}
              </span>
            )}

            {post.caption && (
              <span className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 to-transparent p-3 text-xs leading-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="line-clamp-3">{post.caption}</span>
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default InstagramGrid;
