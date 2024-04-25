"use client";
import { appLinks } from "@/config/navigation";
import Link from "next/link";
import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavMenu } from "./nav-menu/nav-menu";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  // simulation auth
  const session = true;
  const isAdmin = true;

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <nav className="flex items-center justify-between px-5 border-b min-h-16">
        <Link href="/">LogoApp</Link>
        <div className="flex items-center space-x-3 max-md:hidden">
          <NavMenu links={appLinks.mainNav} />
          <NavMenu links={appLinks.admin} session={session} isAdmin={isAdmin} />

          <div className="border-r h-8"></div>

          {session ? (
            <button className="px-2 bg-destructive rounded">Deconnexion</button>
          ) : (
            <NavMenu links={appLinks.auth} />
          )}
        </div>
        <button onClick={toggleOpen} className="md:hidden block">
          <RxHamburgerMenu className="size-5" />
        </button>
      </nav>
      {open && (
        <nav className="flex flex-col justify-center items-center h-screen w-full fixed right-0 top-0 bg-background space-y-3 md:hidden">
          <NavMenu links={appLinks.mainNav} onClick={toggleOpen} />
          <NavMenu links={appLinks.admin} session={session} isAdmin={isAdmin} />

          {session ? (
            <button className="px-2 bg-destructive rounded">Deconnexion</button>
          ) : (
            <NavMenu links={appLinks.auth} />
          )}

          <button onClick={toggleOpen} className="absolute top-5 right-10">
            <RxCross2 className="size-5" />
          </button>
        </nav>
      )}
    </>
  );
}
