import { component$ } from "@builder.io/qwik";
import { IconContainer } from "~/components/icon-container";

export const PauseIcon = component$(({ size = 24 }: { size?: number }) => (
  <IconContainer size={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"
    ></path>
  </IconContainer>
));

export const PlayIcon = component$(({ size = 24 }: { size?: number }) => (
  <IconContainer size={size} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
    ></path>
  </IconContainer>
));

export const Skip15SecBackIcon = component$(() => (
  <IconContainer size={16}>
    <path
      fill="currentColor"
      d="M2.464 4.5h1.473a.75.75 0 1 1 0 1.5H0V2.063a.75.75 0 0 1 1.5 0v1.27a8.25 8.25 0 1 1 10.539 12.554.75.75 0 0 1-.828-1.25A6.75 6.75 0 1 0 2.464 4.5z"
    ></path>
    <path
      fill="currentColor"
      d="M.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H0v-1.5h.303zm4.832-.911h4.05v1.5H6.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924C9.843 14.5 8.51 15.8 6.89 15.8a2.945 2.945 0 0 1-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"
    ></path>
  </IconContainer>
));

export const Skip15SecForwardIcon = component$(() => (
  <IconContainer size={16}>
    <path
      fill="currentColor"
      d="M13.536 4.5h-1.473a.75.75 0 1 0 0 1.5H16V2.063a.75.75 0 0 0-1.5 0v1.27A8.25 8.25 0 1 0 3.962 15.887a.75.75 0 1 0 .827-1.25A6.75 6.75 0 1 1 13.535 4.5z"
    ></path>
    <path
      fill="currentColor"
      d="M6.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H6v-1.5h.303zm4.832-.911h4.05v1.5H12.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924 0 1.624-1.333 2.923-2.954 2.923a2.945 2.945 0 0 1-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"
    ></path>
  </IconContainer>
));

export const PreviousIcon = component$(() => (
  <IconContainer size={16}>
    <path
      fill="currentColor"
      d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
    ></path>
  </IconContainer>
));
export const NextIcon = component$(() => (
  <IconContainer size={16}>
    <path
      fill="currentColor"
      d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
    ></path>
  </IconContainer>
));
