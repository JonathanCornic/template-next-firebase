"use client";
import { appLinks } from "@/config/navigation";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./navlink/navlink";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  // simulation auth
  const session = true;
  const isAdmin = true;

  return (
    <>
      <nav className="flex items-center justify-between p-5 border-b">
        <Link href="/">LogoApp</Link>
        <div className="flex space-x-3 max-md:hidden">
          <div className="space-x-3">
            {appLinks.mainNav.map(
              (link) =>
                // Utilisateur admin
                (link.title !== "Tableau de bord" || (isAdmin && session)) && (
                  <Navlink item={link} key={link.title} />
                )
            )}
          </div>
          <div className="border-x"></div>
          <div className="space-x-3">
            {session ? ( // verif session
              <button>Deconnexion</button>
            ) : (
              appLinks.auth.map((link) => (
                <Navlink item={link} key={link.title} />
              ))
            )}
          </div>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden block"
        >
          MenuLogo
        </button>
      </nav>
      {open && (
        <nav className="flex flex-col justify-center items-center h-screen w-full fixed right-0 top-0 bg-background space-y-3 md:hidden">
          {appLinks.mainNav.map(
            (link) =>
              (link.title !== "Tableau de bord" || (isAdmin && session)) && ( // Utilisateur admin
                <Navlink
                  onclick={
                    link.path !== "/dashboard"
                      ? () => setOpen((prev) => !prev)
                      : () => {
                          return;
                        }
                  }
                  item={link}
                  key={link.title}
                />
              )
          )}
          {session ? ( //verif session
            <button>Deconnexion</button>
          ) : (
            appLinks.auth.map((link) => (
              <Navlink item={link} key={link.title} />
            ))
          )}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="absolute top-5 right-10"
          >
            X
          </button>
        </nav>
      )}
    </>
  );
}
