"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: LinkType;
  onclick?: () => void;
}
export default function Navlink({ item, onclick }: Props) {
  const path = usePathname();

  return (
    <Link
      onClick={onclick}
      href={item.path}
      className={clsx(
        path === item.path && "text-popover-foreground",
        "hover:text-popover-foreground"
      )}
    >
      {item.title}
    </Link>
  );
}
