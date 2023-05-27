import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { HeartOutlineIcon } from "~/icons/heart";
import { Volume } from "../player/volume";
import { QueueIcon } from "~/icons";
import { AudioControl } from "../player/audio-control";

export const Footer = component$(() => {
  const location = useLocation();
  return (
    <footer class="col-span-12 flex items-center justify-between px-4 gap-4">
      <div class="flex items-center gap-4 w-[30%]">
        <div>
          <img
            src="https://i.scdn.co/image/ab67616d0000485137f65266754703fd20d29854"
            alt="Image"
            width={"100%"}
            height={"100%"}
            class="rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <Link class="text-sm" href="/">
            Kahani Suno 2.0
          </Link>
          <div class=" text-xs text-subdude font-normal">
            <span>
              <Link href="/">Arijit Singh</Link>
            </span>
            <span>{", "}</span>
            <span>
              <Link href="/">Lata Mangeshker</Link>
            </span>
            {", "}
            <span>
              <Link href="/">Kumar Sanu</Link>
            </span>
            {", "}
            <span>
              <Link href="/">Kumar Sanu</Link>
            </span>
          </div>
        </div>
        <div>
          <button class="text-subdude hover:text-white transition duration-300">
            <HeartOutlineIcon />
          </button>
        </div>
      </div>
      <AudioControl />
      <div class="w-[20%]  h-full flex items-center justify-end">
        <div class="flex items-center gap-4">
          <Link
            href="/queue"
            class={` ${
              location.url.pathname === "/queue/"
                ? "text-green-500 hover:text-[#1ed760]"
                : "hover:text-white text-subdude"
            }`}
          >
            <QueueIcon />
          </Link>
          <Volume />
        </div>
      </div>
    </footer>
  );
});
