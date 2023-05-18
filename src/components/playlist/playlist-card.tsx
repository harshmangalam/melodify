import { $, component$, useOn, useSignal } from "@builder.io/qwik";
import { PlayPauseButton } from "../play-pause-button";
import { Link } from "@builder.io/qwik-city";

export const PlaylistCard = component$(() => {
  const showAction = useSignal(false);

  useOn(
    "mouseenter",
    $(() => (showAction.value = true))
  );

  useOn(
    "mouseleave",
    $(() => (showAction.value = false))
  );
  return (
    <article class="rounded-md bg-[#181818] p-4 shadow hover:bg-[#282828] transition duration-300">
      <div class="mb-4 relative">
        <img
          src="https://i.scdn.co/image/ab67706f000000020776a5b5a70f372747584c2b"
          alt="Song"
          width={"100%"}
          height={"100%"}
          class="rounded-md"
        />
        <div hidden={!showAction.value} class="absolute bottom-2 right-2">
          <PlayPauseButton />
        </div>
      </div>

      <div>
        <Link href="/" class="font-bold pb-1 text-white">
          Punjabi 101
        </Link>
        <p class="text-sm text-subdude">
          Ultimate 101 Punjabi Hits with Sidhu Moose Wala
        </p>
      </div>
    </article>
  );
});
