import { component$ } from "@builder.io/qwik";
import { LibraryItem } from "./library-item";
import { Link } from "@builder.io/qwik-city";
import { PlaylistCard } from "~/components/playlist/playlist-card";

export default component$(() => {
  return (
    <div class="px-6">
      <h2 class="mb-4 text-3xl font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
        Good evening
      </h2>
      <div class="flex flex-col space-y-6">
        <ul class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
          <LibraryItem
            avatarSrc="https://misc.scdn.co/liked-songs/liked-songs-640.png"
            href="/collection/tracks"
            title="Liked Songs"
          />
          <LibraryItem
            avatarSrc="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg"
            href="/collection/tracks"
            title="Top 50 - India"
          />
          <LibraryItem
            avatarSrc="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg"
            href="/collection/tracks"
            title="Top 50 - Global"
          />
          <LibraryItem
            avatarSrc="https://seed-mix-image.spotifycdn.com/v6/img/romantic/2GoeZ0qOTt6kjsWW4eA6LS/en/default"
            href="/collection/tracks"
            title="Romantic Mix"
          />
          <LibraryItem
            avatarSrc="https://i.scdn.co/image/ab67706c0000da8440a6a9a8f39c112e8cf45e0b"
            href="/collection/tracks"
            title="Lofi Songs Bollywood"
          />
          <LibraryItem
            avatarSrc="https://i.scdn.co/image/ab6761610000e5ebe26e237ca6b143ca2074589a"
            href="/collection/tracks"
            title="Ankit Tiwari"
          />
        </ul>

        <section>
          <div class="mb-4 flex items-center gap-2 justify-between">
            <h2 class="text-2xl font-bold text-white flex-1">India`s Best</h2>
            <Link
              href="/"
              class="text-[#b3b3b3] text-sm font-bold hover:underline"
            >
              Show all
            </Link>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </div>
        </section>
      </div>
    </div>
  );
});
