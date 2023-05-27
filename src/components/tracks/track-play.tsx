import { component$, useSignal } from "@builder.io/qwik";
import { PauseIcon, PlayIcon } from "~/icons";

export const TrackPlay = component$(() => {
  const isPlaying = useSignal(false);
  return (
    <button
      class="w-4 h-4"
      onClick$={() => (isPlaying.value = !isPlaying.value)}
    >
      {isPlaying.value ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
    </button>
  );
});
