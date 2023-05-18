import { component$ } from "@builder.io/qwik";
import { LibraryItem } from "./library-item";

export default component$(() => {
  return (
    <div>
      <div class="flex flex-col space-y-6 px-6">
        <ul class="grid grid-cols-2 gap-y-3 gap-x-6">
          <LibraryItem />
          <LibraryItem />
          <LibraryItem />
          <LibraryItem />
          <LibraryItem />
          <LibraryItem />
          <LibraryItem />
        </ul>
      </div>
    </div>
  );
});
