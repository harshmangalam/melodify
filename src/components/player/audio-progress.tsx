import { component$ } from "@builder.io/qwik";

export const AudioProgress = component$(() => {
  return (
    <div class="flex items-center gap-2 w-full">
      <span class="text-subdude text-xs font-normal">15:17</span>

      <input type="range" name="progress" id="progress" class="h-2  w-full" />

      <span class="text-subdude text-xs font-normal">50:17</span>
    </div>
  );
});
