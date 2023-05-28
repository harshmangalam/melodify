import { component$ } from "@builder.io/qwik";
import { LibrarySearch } from "./library-search";
import { TracksTable } from "~/components/tracks/track-table";

export default component$(() => {
  return (
    <div>
      <LibrarySearch />
      <TracksTable />
    </div>
  );
});
