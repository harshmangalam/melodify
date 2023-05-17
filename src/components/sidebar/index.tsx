import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HomeOutlineIcon, SearchOutlineIcon } from "~/icons";

export const Sidebar = component$(() => {
  return (
    <aside class="col-span-3 row-span-5 h-full">
      <ul class="py-2 px-3">
        <li class="py-1 px-3">
          <Link
            href="/"
            class="flex gap-5 text-[#b3b3b3] hover:text-white h-10"
          >
            <HomeOutlineIcon />
            <span class="font-bold">Home</span>
          </Link>
        </li>
        <li class="py-1 px-3">
          <Link
            href="/search"
            class="flex gap-5 text-[#b3b3b3] hover:text-white h-10"
          >
            <SearchOutlineIcon />
            <span class="font-bold">Search</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
});
