import { component$ } from "@builder.io/qwik";

export const PhoneAuth = component$(() => {
  return (
    <button class="flex space-x-6 border w-full border-essential-subdude rounded-full py-4 justify-center px-6 hover:border-white">
      <span class="font-bold"> Continue with Phone Number</span>
    </button>
  );
});
