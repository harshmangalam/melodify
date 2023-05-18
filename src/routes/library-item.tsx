import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const LibraryItem = component$(() => {
  return (
    <li class="bg-[hsla(0,0%,100%,.1)] rounded h-16 transition duration-300 hover:bg-[hsla(0,0%,100%,.2)] flex items-center gap-4">
      <img
        width={64}
        height={64}
        src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
        class="rounded-l"
      />

      <Link
        href="/"
        class="flex-1 text-white text-ellipsis break-words font-bold "
      >
        Liked Songs
      </Link>
    </li>
  );
});
