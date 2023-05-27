import { component$ } from "@builder.io/qwik";

export const LibraryFilter = component$(() => {
  return (
    <div class="my-2 mx-4 ">
      <div class="scroll-smooth flex items-center overflow-x-scroll">
        <button
          role="checkbox"
          class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
        >
          <span class="text-sm font-normal text-white">Playlists</span>
        </button>
        <button
          role="checkbox"
          class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
        >
          <span class="text-sm font-normal text-white">Artists</span>
        </button>

        <button
          role="checkbox"
          class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
        >
          <span class="text-sm font-normal text-white">Albums</span>
        </button>
        <button
          role="checkbox"
          class="scroll-me-2 mr-2 rounded-full px-3 py-1 bg-tinted-base"
        >
          <span class="text-sm font-normal text-white whitespace-nowrap">
            Podcasts & Shows
          </span>
        </button>
      </div>
    </div>
  );
});
