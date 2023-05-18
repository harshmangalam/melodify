import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LibraryItemProps {
  subtitle?: any;
  title: string;
  avatarSrc: string;
  href: string;
  isAccent?: boolean;
  avatarCircle?: boolean;
}
export const LibraryItem = component$((props: LibraryItemProps) => {
  const {
    avatarSrc,
    href,
    title,
    subtitle,
    isAccent = false,
    avatarCircle = false,
  } = props;
  return (
    <li>
      <Link
        href={href}
        class="flex items-center gap-3 p-2 hover:bg-tinted-base rounded-md"
      >
        <img
          width={48}
          height={48}
          src={avatarSrc}
          alt={title}
          class={`w-12 h-12 ${avatarCircle ? "rounded-full" : "rounded-md"}`}
        />
        <div class="flex flex-col space-y-0.5">
          <p
            class={`
              break-all  font-normal ${
                isAccent ? "text-bright-accent" : "text-white"
              }
             
            `}
          >
            {title}
          </p>
          <p class="text-subdude font-normal text-sm">{subtitle}</p>
        </div>
      </Link>
    </li>
  );
});
