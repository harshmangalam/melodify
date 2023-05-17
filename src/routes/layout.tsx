import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="p-2 h-screen bg-black">
      <div class="grid grid-cols-12 gap-2 grid-rows-6 h-full w-full">
        <div class="bg-red-500 col-span-3 row-span-5"></div>
        <div class="bg-green-500 col-span-9 row-span-5"></div>
        <div class="bg-pink-500 col-span-12"></div>
      </div>
    </div>
  );
});
