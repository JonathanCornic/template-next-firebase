import Navlink from "../navlink/navlink";

interface Props {
  links: LinkType[];
  session?: boolean;
  isAdmin?: boolean;
  onClick?: () => void;
}
export function NavMenu({ links, session, isAdmin, onClick }: Props) {

  const DASHBOARD_TITLE = "Tableau de bord";
  
  return (
    <>
      {links.map(
        (link) =>
          (link.title !== DASHBOARD_TITLE || (isAdmin && session)) && (
            <Navlink item={link} key={link.title} onClick={onClick} />
          )
      )}
    </>
  );
}
