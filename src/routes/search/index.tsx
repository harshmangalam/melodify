import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { SearchInput } from "~/components/ui/search-input";

export default component$(() => {
  return (
    <div>
      <header class="h-16 flex flex-col justify-center">
        {/* search section  */}
        <section>
          <Form role="search" class="max-w-md w-full">
            <SearchInput
              name="search"
              placeholder="What do you want to listen to ?"
              autoFocus
            />
          </Form>
        </section>

        {/* filter section  */}
        <section></section>
      </header>
    </div>
  );
});
