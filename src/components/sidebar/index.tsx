import { component$ } from "@builder.io/qwik";
import {
  HomeFilledIcon,
  HomeOutlineIcon,
  SearchFilledIcon,
  SearchOutlineIcon,
} from "~/icons";
import { NavLinkItem } from "./nav-link-item";

export const Sidebar = component$(() => {
  return (
    <aside class="col-span-3 row-span-5 h-full">
      <ul class="py-2 px-3">
        <NavLinkItem
          href="/"
          icon={HomeOutlineIcon}
          activeIcon={HomeFilledIcon}
          name="Home"
        />
        <NavLinkItem
          activeIcon={SearchFilledIcon}
          href="/search/"
          icon={SearchOutlineIcon}
          name="Search"
        />
      </ul>
    </aside>
  );
});
