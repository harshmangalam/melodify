import { type Component, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

interface NavLinkItemProps {
  name: string;
  icon: Component<{}>;
  href: string;
  activeIcon: Component<{}>;
}
export const NavLinkItem = component$((props: NavLinkItemProps) => {
  const { name, icon: Icon, href, activeIcon: ActiveIcon } = props;
  const location = useLocation();

  return (
    <li class="py-1 px-3">
      <Link
        href={href}
        class={[
          "flex gap-5 text-[#b3b3b3] hover:text-white h-10",
          { "text-white": location.url.pathname === href },
        ]}
      >
        {location.url.pathname === href ? <ActiveIcon /> : <Icon />}
        <span class="font-bold">{name}</span>
      </Link>
    </li>
  );
});
