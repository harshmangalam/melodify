import { component$ } from "@builder.io/qwik";
import { IconContainer } from "~/components/icon-container";

export const ErrorIcon = component$(() => (
  <IconContainer size={16}>
    <path
      fill="currentColor"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.25-5v7h1.5V3h-1.5zm0 8.526v1.5h1.5v-1.5h-1.5z"
    ></path>
  </IconContainer>
));
