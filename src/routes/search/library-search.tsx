import { component$, useSignal } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { LibraryFilter } from "~/components/shared/library-filter";
import { SearchInput } from "~/components/ui/search-input";

export const LibrarySearch = component$(() => {
  const searchInput = useSignal("");
  return (
    <header class="sticky top-0 bg-base">
      {/* search section  */}
      <section class="h-16 flex flex-col justify-center">
        <Form role="search" class="max-w-md w-full">
          <SearchInput
            name="search"
            placeholder="What do you want to listen to ?"
            autoFocus
            searchValue={searchInput.value}
            value={searchInput.value}
            onInput$={(_, { value }) => (searchInput.value = value)}
            onSearchClear$={() => {
              searchInput.value = "";
            }}
          />
        </Form>
      </section>

      {/* filter section  */}
      {searchInput.value.length > 0 && (
        <section class="pt-2 pb-4">
          <LibraryFilter />
        </section>
      )}
    </header>
  );
});
