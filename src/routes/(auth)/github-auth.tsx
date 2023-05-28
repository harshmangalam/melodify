import { component$ } from "@builder.io/qwik";
import { GithubIcon } from "~/icons";

export const GithubAuth = component$(() => {
  return (
    <button class="flex items-center space-x-6 border w-full border-essential-subdude rounded-full py-4 justify-center px-6 hover:border-white">
      <GithubIcon />
      <span class="font-bold"> Continue with Github</span>
    </button>
  );
});
