import { NavLink } from "react-router";

import Tooltip from "../Tooltip";

const menuItems = [
  {
    id: "nav-portfolio",
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: "nav-about",
    name: "About",
    path: "/about",
  },
  {
    id: "nav-contact",
    name: "Contact",
    path: "/contact",
  },
];

const NavContent = () => {
  return (
    <ul className="nav__list flex flex-ai-c gap-1">
      {menuItems.map((link) => (
        <li key={link.id} className="nav__list--item">
          <NavLink
            className="nav__list--item__link relative py-1"
            to={link.path}
          >
            {({ isActive }) => (
              <>
                {link.name}
                {isActive ? (
                  <Tooltip>You are on this page</Tooltip>
                ) : (
                  <Tooltip isLink>Go to {link.name} page</Tooltip>
                )}
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavContent;
