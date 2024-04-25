"use client";
import { categoryNamesInFrench, dashLinks } from "@/config/navigation";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const path = usePathname();

  return (
    <div className="h-screen w-64 border-r p-5 fixed">
      <div className="border-b pb-5">
        <Link href="/">LogoApp</Link>
      </div>
      <div className="pt-5 space-y-5">
        {Object.entries(dashLinks).map(([category, links]) => (
          <div key={category}>
            <div className="mb-2">{categoryNamesInFrench[category]}</div>
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={clsx(
                    path === link.path && "bg-popover text-popover-foreground",
                    "flex items-center gap-3 rounded hover:bg-popover hover:text-popover-foreground pl-5"
                  )}
                >
                  {link.icon && <link.icon />}
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

