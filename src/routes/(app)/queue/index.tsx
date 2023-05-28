import { component$ } from "@builder.io/qwik";
import { TracksTable } from "~/components/tracks/track-table";

export default component$(() => {
  return (
    <div class="py-4">
      <h2 class="text-2xl font-bold mb-4">Queue</h2>
      <section class="my-4">
        <h2 class="text-subdude font-bold mb-2">Now playing</h2>
        <TracksTable hideHeader />
      </section>

      <section class="my-4">
        <h2 class="text-subdude font-bold mb-2">Next up</h2>
        <TracksTable hideHeader />
      </section>
    </div>
  );
});
