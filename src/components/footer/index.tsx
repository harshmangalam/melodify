import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HeartFilledIcon } from "~/icons/heart";

export const Footer = component$(() => {
  return (
    <footer class="col-span-12 flex items-center justify-between px-4 max-w-[30%] w-full">
      <div class="flex items-center gap-4">
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
          </div>
        </div>

        <div>
          <button class="text-[#1ed760]">
            <HeartFilledIcon />
          </button>
        </div>
      </div>
    </footer>
  );
});
