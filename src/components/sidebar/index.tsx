import { component$ } from "@builder.io/qwik";
import { HomeOutlineIcon, SearchOutlineIcon } from "~/icons";
import { NavLinkItem } from "./nav-link-item";

export const Sidebar = component$(() => {
  return (
    <aside class="col-span-3 row-span-5 h-full">
      <ul class="py-2 px-3">
        <NavLinkItem icon={<HomeOutlineIcon />} name="Home" />
        <NavLinkItem icon={<SearchOutlineIcon />} name="Search" />
      </ul>
    </aside>
  );
});
