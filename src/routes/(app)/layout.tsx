import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";
import { Sidebar } from "~/components/sidebar";

export default component$(() => {
  return (
    <div class="px-2 h-screen bg-black text-white">
      <div class="grid grid-cols-12 gap-2 grid-rows-6 h-full w-full">
        <Sidebar />
        <div class="col-span-7 md:col-span-7 lg:col-span-8 xl:col-span-9 row-span-5 bg-base relative rounded-lg overflow-y-auto">
          <header class="flex items-center justify-end gap-8 sticky top-0 bg-base h-16 px-6 z-10">
            <Link
              href="/login"
              class="text-subdude font-bold hover:text-white hover:scale-105 transition duration-300"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              class="bg-white h-12 grid place-items-center font-bold px-8 py-2 text-black hover:scale-105 transition duration-300 rounded-full"
            >
              Log in
            </Link>
          </header>
          <div class="px-6">
            <Slot />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
});
