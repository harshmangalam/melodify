import { component$ } from "@builder.io/qwik";
import { LibrarySearch } from "./library-search";
import { SongsTable } from "~/components/tracks/tracks-table";

export default component$(() => {
  return (
    <div>
      <LibrarySearch />
      <SongsTable />
    </div>
  );
});
