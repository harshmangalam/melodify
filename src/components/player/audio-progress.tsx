import { component$ } from "@builder.io/qwik";

export const AudioProgress = component$(() => {
  return (
    <div class="flex items-center gap-2">
      <span class="text-subdude text-xs font-normal">15:17</span>

      <label for="progress">
        <input type="range" name="progress" id="progress" />
      </label>

      <span class="text-subdude text-xs font-normal">50:17</span>
    </div>
  );
});
