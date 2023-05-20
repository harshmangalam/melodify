import { $, component$, useSignal } from "@builder.io/qwik";
import { Volume0Icon, Volume1Icon, Volume2Icon, Volume3Icon } from "~/icons";

export const Volume = component$(() => {
  const level = useSignal("0");
  const handleVolumeIconPress = $(() => {
    if (+level.value === 0) {
      level.value = "100";
    } else {
      level.value = "0";
    }
  });

  return (
    <div class="flex items-center gap-2">
      <label
        for="volume"
        onClick$={handleVolumeIconPress}
        class="hover:text-white cursor-pointer"
      >
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
        class="bg-red-500 h-1"
      />
    </div>
  );
});
