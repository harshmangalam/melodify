import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HeartOutlineIcon } from "~/icons/heart";
import { PlayPauseButton } from "../play-pause-button";

export const Footer = component$(() => {
  return (
    <footer class="col-span-12 flex items-center justify-between px-4 gap-4">
      <div class="flex items-center gap-4 w-[25%]">
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
      <div class="w-[45%]  mx-auto h-full flex flex-col justify-center space-y-2">
        <div class="flex items-center gap-4 justify-center">
          <PlayPauseButton size="md" bg="white" />
        </div>
      </div>
      <div class="w-[30%] bg-purple-500 mx-auto h-full"></div>
    </footer>
  );
});
