import { $, component$, useOn, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PauseIcon } from "~/icons/pause";
import { PlayIcon } from "~/icons/play";

interface LibraryItemProps {
  avatarSrc: string;
  title: string;
  href: string;
}
export const LibraryItem = component$((props: LibraryItemProps) => {
  const { avatarSrc, href, title } = props;
  const showAction = useSignal(false);
  const play = useSignal(false);

  useOn(
    "mouseenter",
    $(() => (showAction.value = true))
  );
  useOn(
    "mouseleave",
    $(() => (showAction.value = false))
  );
  return (
    <li class="bg-[hsla(0,0%,100%,.1)] rounded h-16 transition duration-300 hover:bg-[hsla(0,0%,100%,.2)] flex items-center gap-4">
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

      <div hidden={!showAction.value} class="px-4">
        <button
          class="bg-green-base hover:bg-green-base-highlight rounded-full w-12 h-12 text-black grid place-items-center transition duration-300 hover:scale-105"
          onClick$={() => (play.value = !play.value)}
        >
          {play.value ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </li>
  );
});
