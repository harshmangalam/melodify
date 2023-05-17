import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavLinkItemProps {
  name: string;
  icon: any;
}
export const NavLinkItem = component$((props: NavLinkItemProps) => {
  const { name, icon } = props;
  return (
    <li class="py-1 px-3">
      <Link href="/" class="flex gap-5 text-[#b3b3b3] hover:text-white h-10">
        {icon}
        <span class="font-bold">{name}</span>
      </Link>
    </li>
  );
});
