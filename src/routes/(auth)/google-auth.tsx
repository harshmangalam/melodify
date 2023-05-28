import { component$ } from "@builder.io/qwik";
import { GoogleIcon } from "~/icons";

export const GoogleAuth = component$(() => {
  return (
    <button class="flex items-center space-x-6 border w-full border-essential-subdude rounded-full py-4 justify-center px-6 hover:border-white">
      <GoogleIcon />
      <span class="font-bold"> Continue with Google</span>
    </button>
  );
});
