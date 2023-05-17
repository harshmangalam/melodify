import { Slot, component$ } from "@builder.io/qwik";

export const IconContainer = component$(({ size = 24 }: { size?: number }) => (
  <svg
    role="img"
    height={size}
    width={size}
    aria-hidden="true"
    viewBox={`0 0 ${size} ${size}`}
    data-encore-id="icon"
  >
    <Slot />
  </svg>
));
