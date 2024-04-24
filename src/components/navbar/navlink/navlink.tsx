"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: LinkType;
  onClick?: (() => void);
}
export default function Navlink({ item, onClick }: Props) {
  const path = usePathname();

  return (
    <Link
      onClick={onClick}
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
