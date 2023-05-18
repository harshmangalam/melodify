import { component$ } from "@builder.io/qwik";
import { LibraryItem } from "./library-item";

export default component$(() => {
  return (
    <div>
      <div class="flex flex-col space-y-6 px-6">
        <ul class="grid grid-cols-2 gap-y-3 gap-x-6">
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
        </ul>
      </div>
    </div>
  );
});
