import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="h-screen overflow-y-auto bg-base text-white flex flex-col">
      <header class="flex justify-center py-4 sticky top-0 bg-base">
        <h1 class="font-bold text-3xl">Melodify</h1>
      </header>

      <div class="flex-1 flex justify-center">
        <div class="max-w-md w-full">
          <Slot />
        </div>
      </div>
    </div>
  );
});
