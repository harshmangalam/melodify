import { component$ } from "@builder.io/qwik";
import { PlayPauseButton } from "./play-pause-button";
import {
  NextIcon,
  PreviousIcon,
  Skip15SecBackIcon,
  Skip15SecForwardIcon,
} from "~/icons";
import { AudioProgress } from "./audio-progress";

export const AudioControl = component$(() => {
  return (
    <div class="w-[50%]  h-full flex flex-col justify-center space-y-2">
      <div class="flex items-center gap-6 justify-center text-subdude w-full">
        <button class="hover:text-white">
          <Skip15SecBackIcon />
        </button>
        <button class="hover:text-white">
          <PreviousIcon />
        </button>
        <PlayPauseButton size="md" bg="white" />
        <button class="hover:text-white">
          <NextIcon />
        </button>
        <button class="hover:text-white">
          <Skip15SecForwardIcon />
        </button>
      </div>
      <AudioProgress />
    </div>
  );
});
