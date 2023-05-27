import { Slot, component$ } from "@builder.io/qwik";

export const IconContainer = component$(
  ({ size = 24, viewBox }: { size?: number; viewBox?: string }) => {
    const customViewBox = viewBox ?? `0 0 ${size} ${size}`;
    return (
      <svg
        role="img"
        height={size}
        width={size}
        aria-hidden="true"
        viewBox={customViewBox}
        data-encore-id="icon"
      >
        <Slot />
      </svg>
    );
  }
);
