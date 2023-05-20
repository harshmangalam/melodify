import { component$, useSignal } from "@builder.io/qwik";
import {
  Volume0Icon,
  Volume1Icon,
  Volume2Icon,
  Volume3Icon,
} from "~/icons/volume";

export const Volume = component$(() => {
  const level = useSignal("0");
  return (
    <div class="flex items-center gap-2">
      <label for="volume" class="w-4 h-4">
        {+level.value === 0 && <Volume0Icon />}
        {+level.value > 0 && +level.value <= 33 && <Volume1Icon />}
        {+level.value > 33 && +level.value <= 66 && <Volume2Icon />}
        {+level.value > 66 && +level.value <= 100 && <Volume3Icon />}
      </label>
      <input
        bind:value={level}
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
      />
    </div>
  );
});
