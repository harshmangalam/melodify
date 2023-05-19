import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class="col-span-12 flex items-center justify-between px-4">
      <div class="flex items-center gap-4">
        <div>
          <img
            src="https://i.scdn.co/image/ab67616d0000485137f65266754703fd20d29854"
            alt="Image"
            width={"100%"}
            height={"100%"}
            class="rounded-md"
          />
        </div>
        <div class="flex flex-col">
          <Link class="text-sm" href="/">
            Kahani Suno 2.0
          </Link>
          <Link class=" text-xs text-subdude font-normal" href="/">
            Kahani Suno 2.0
          </Link>
        </div>
      </div>
    </footer>
  );
});
