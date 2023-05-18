import { component$, useSignal } from "@builder.io/qwik";
import { PauseIcon } from "~/icons/pause";
import { PlayIcon } from "~/icons/play";

export const PlayPauseButton = component$(() => {
  const play = useSignal(false);
  return (
    <button
      class="bg-green-base hover:bg-green-base-highlight rounded-full w-12 h-12 text-black grid place-items-center transition duration-300 hover:scale-105 shadow"
      onClick$={() => (play.value = !play.value)}
    >
      {play.value ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
});
