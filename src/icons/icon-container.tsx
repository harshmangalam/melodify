import { Slot, component$ } from "@builder.io/qwik";

export const IconContainer = component$(() => (
  <svg
    role="img"
    height="24"
    width="24"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-encore-id="icon"
  >
    <Slot />
  </svg>
));
