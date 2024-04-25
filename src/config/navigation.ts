import { LinkType } from "@/types/links";
import { HiChartPie, HiHome } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

export const appLinks: { [key: string]: LinkType[] } = {
  mainNav: [
    {
      title: "Accueil",
      path: "/",
    },
    {
      title: "Galerie",
      path: "/galery",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "À propos",
      path: "/about",
    },
  ],
  admin: [
    {
      title: "Tableau de bord",
      path: "/dashboard",
    },
  ],
  auth: [
    {
      title: "Connexion",
      path: "/login",
    },
    {
      title: "Inscription",
      path: "/register",
    },
  ],
};

export const dashLinks: { [key: string]: LinkType[] } = {
  dashboard: [
    {
      title: "Aperçu",
      path: "/dashboard",
      icon: HiHome,
    },
    {
      title: "Analyse",
      path: "/dashboard/analyse",
      icon: HiChartPie,
    },
  ],
  general: [
    {
      title: "Réglages",
      path: "/dashboard/settings",
      icon: IoMdSettings,
    },
  ],
};
export const categoryNamesInFrench: Record<string, string> = {
  dashboard: "Tableau de bord",
  general: "Général",
};
