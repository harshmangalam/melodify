import { Slot, component$ } from "@builder.io/qwik";
import { Sidebar } from "~/components/sidebar";

export default component$(() => {
  return (
    <div class="p-2 h-screen bg-black text-white">
      <div class="grid grid-cols-12 gap-2 grid-rows-6 h-full w-full">
        <Sidebar />
        <div class="col-span-9 row-span-5 bg-red-500">
          <Slot />
        </div>
        <div class="bg-pink-500 col-span-12"></div>
      </div>
    </div>
  );
});
