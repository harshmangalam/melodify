import { component$, useSignal } from "@builder.io/qwik";
import { PauseIcon, PlayIcon } from "~/icons";

export const PlayPauseButton = component$(
  ({
    bg = "base",
    size = "xl",
  }: {
    bg?: "base" | "white";
    size?: "md" | "xl";
  }) => {
    const play = useSignal(false);

    return (
      <button
        class={[
          " rounded-full  text-black grid place-items-center transition duration-300 hover:scale-105 shadow",
          { "bg-green-base hover:bg-green-base-highlight": bg === "base" },
          { "bg-white": bg === "white" },
          { "w-12 h-12": size === "xl" },
          { "w-8 h-8": size === "md" },
        ]}
        onClick$={() => (play.value = !play.value)}
      >
        {play.value ? <PauseIcon /> : <PlayIcon />}
      </button>
    );
  }
);
