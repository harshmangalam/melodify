import { $, component$, useOn, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PlayPauseButton } from "~/components/play-pause-button";

interface LibraryItemProps {
  avatarSrc: string;
  title: string;
  href: string;
}
export const LibraryItem = component$((props: LibraryItemProps) => {
  const { avatarSrc, href, title } = props;
  const showAction = useSignal(false);

  useOn(
    "mouseenter",
    $(() => (showAction.value = true))
  );
  useOn(
    "mouseleave",
    $(() => (showAction.value = false))
  );
  return (
    <li class="bg-[hsla(0,0%,100%,.1)] rounded h-16 transition duration-300 hover:bg-[hsla(0,0%,100%,.2)] flex items-center gap-4 relative">
      <img
        width={64}
        height={64}
        src={avatarSrc}
        class="rounded-l w-16 h-16 "
      />

      <Link
        href={href}
        class="flex-1 text-white text-ellipsis break-words font-bold "
      >
        {title}
      </Link>

      <div
        hidden={!showAction.value}
        class="absolute top-1/2 right-2 -translate-y-1/2"
      >
        <PlayPauseButton />
      </div>
    </li>
  );
});
