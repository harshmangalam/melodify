import { component$ } from "@builder.io/qwik";
import {
  ArrowRightIcon,
  HomeFilledIcon,
  HomeOutlineIcon,
  LibraryOutlineIcon,
  PlusIcon,
  SearchFilledIcon,
  SearchOutlineIcon,
} from "~/icons";
import { NavLinkItem } from "./nav-link-item";
import { LibraryItem } from "./library-item";

export const Sidebar = component$(() => {
  return (
    <aside class="col-span-5 md:col-span-5 lg:col-span-4 xl:col-span-3 row-span-5 h-full flex flex-col gap-2">
      <ul class="py-2 px-3 bg-base rounded-lg">
        <NavLinkItem
          href="/"
          icon={HomeOutlineIcon}
          activeIcon={HomeFilledIcon}
          name="Home"
        />
        <NavLinkItem
          activeIcon={SearchFilledIcon}
          href="/search/"
          icon={SearchOutlineIcon}
          name="Search"
        />
      </ul>

      <div class="flex-1 bg-base rounded-lg flex flex-col h-full overflow-y-auto">
        <div class="sticky top-0 bg-base">
          <header class="py-2 px-4 flex items-center gap-2 text-[#a7a7a7]">
            <button class="flex items-center gap-3 font-bold hover:text-white py-1 px-2">
              <span>
                <LibraryOutlineIcon />
              </span>
              <span class="hidden md:block">Your Library</span>
            </button>
            <div class="flex-1 flex justify-end">
              <button class="p-2 hover:text-white ">
                <PlusIcon />
              </button>
            </div>
            <button class="p-2 hover:text-white">
              <ArrowRightIcon />
            </button>
          </header>

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
        </div>

        <ul class="flex-1 my-2 mx-2 h-full">
          <LibraryItem
            title="Liked Songs"
            subtitle="Playlist • 17 songs"
            avatarSrc="https://misc.scdn.co/liked-songs/liked-songs-640.png"
            href="/collection/tracks"
            isAccent={true}
          />
          <LibraryItem
            title="Ankit Tiwari"
            subtitle="Artist"
            avatarSrc="https://i.scdn.co/image/ab6761610000a000e26e237ca6b143ca2074589a"
            href="/artist/272vv32rr32"
            avatarCircle={true}
          />
          <LibraryItem
            title="Dj Chetas Radio"
            subtitle="Playlist • Spotify"
            avatarSrc="https://i.scdn.co/image/ab6761610000a000304b71d0a10604ec0cf314c6"
            href="/playlist/272vv32rr32"
            avatarCircle={true}
          />
          <LibraryItem
            title="Kabir Singh"
            subtitle="Album • Various Artists"
            avatarSrc="https://i.scdn.co/image/ab67616d00001a9dc5545f737b16ad5ee767b62a"
            href="/album/272vv32rr32"
          />
          <LibraryItem
            title="Liked Songs"
            subtitle="Playlist • 17 songs"
            avatarSrc="https://misc.scdn.co/liked-songs/liked-songs-640.png"
            href="/collection/tracks"
            isAccent={true}
          />
          <LibraryItem
            title="Ankit Tiwari"
            subtitle="Artist"
            avatarSrc="https://i.scdn.co/image/ab6761610000a000e26e237ca6b143ca2074589a"
            href="/artist/272vv32rr32"
            avatarCircle={true}
          />
          <LibraryItem
            title="Dj Chetas Radio"
            subtitle="Playlist • Spotify"
            avatarSrc="https://i.scdn.co/image/ab6761610000a000304b71d0a10604ec0cf314c6"
            href="/playlist/272vv32rr32"
            avatarCircle={true}
          />
          <LibraryItem
            title="Kabir Singh"
            subtitle="Album • Various Artists"
            avatarSrc="https://i.scdn.co/image/ab67616d00001a9dc5545f737b16ad5ee767b62a"
            href="/album/272vv32rr32"
          />
        </ul>
      </div>
    </aside>
  );
});
