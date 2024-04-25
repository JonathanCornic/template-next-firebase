import { LinkType } from "@/types/links";
import Navlink from "../navlink/navlink";

interface Props {
  links: LinkType[];
  session?: boolean;
  isAdmin?: boolean;
  onClick?: () => void;
}
export function NavMenu({ links, session, isAdmin, onClick }: Props) {
  return (
    <>
      {links.map(
        (link) =>
          (link.title !== "Tableau de bord" || (isAdmin && session)) && (
            <Navlink item={link} key={link.title} onClick={onClick} />
          )
      )}
    </>
  );
}
