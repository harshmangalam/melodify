import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LibraryItemProps {
  avatarSrc: string;
  title: string;
  href: string;
}
export const LibraryItem = component$((props: LibraryItemProps) => {
  const { avatarSrc, href, title } = props;
  return (
    <li class="bg-[hsla(0,0%,100%,.1)] rounded h-16 transition duration-300 hover:bg-[hsla(0,0%,100%,.2)] flex items-center gap-4">
      <img width={64} height={64} src={avatarSrc} class="rounded-l" />

      <Link
        href={href}
        class="flex-1 text-white text-ellipsis break-words font-bold "
      >
        {title}
      </Link>
    </li>
  );
});
