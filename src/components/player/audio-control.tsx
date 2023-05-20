import { component$ } from "@builder.io/qwik";
import { PlayPauseButton } from "./play-pause-button";
import {
  NextIcon,
  PreviousIcon,
  Skip15SecBackIcon,
  Skip15SecForwardIcon,
} from "~/icons";

export const AudioControl = component$(() => {
  return (
    <div class="flex items-center gap-6 justify-center text-subdude">
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
  );
});
