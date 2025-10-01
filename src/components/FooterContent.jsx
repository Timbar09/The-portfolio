import { NavLink } from "react-router";

import Tooltip from "./Tooltip";
import SocialLinkTree from "./SocialLinkTree";

import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { BiLogoSass as SassIcon } from "react-icons/bi";
import {
  TbBrandVscode as VscodeIcon,
  TbBrandVite as ViteIcon,
} from "react-icons/tb";

import { NAV_LINKS } from "./Navbar/NavList";

import "../assets/scss/components/FooterContent.scss";

const FooterContent = () => {
  return (
    <footer className="footer">
      <div className="container py-3 flex flex-col flex_sm-row flex-jc-sb gap-2">
        <div className="footer__right">
          <h2 className="footer__title">Miles Mosweu</h2>

          <ul className="footer__list flex flex-col mt-1">
            <li className="">
              <p className="footer__text flex flex-jc-c gap-1 m-0">
                Built with:{" "}
                <span className="flex-inline flex-ai-c gap-1">
                  <VscodeIcon className="footer__icon" />
                  <ViteIcon className="footer__icon" />
                  <ReactIcon className="footer__icon" />
                  <SassIcon className="footer__icon" />
                </span>
              </p>
            </li>

            <li className="">
              <div className="footer__bottom">
                <p className="footer__text m-0">
                  &copy; {new Date().getFullYear()} Miles Mosweu
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer__center">
          <h2 className="footer__title">General</h2>

          <ul className="footer__list flex flex-col mt-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink className="footer__link--item relative" to={link.path}>
                  {link.name}

                  <Tooltip isLink>Go to {link.name} page</Tooltip>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__left">
          <div className="footer__social-links flex flex-jc-c flex_sm-jc-fe">
            <SocialLinkTree />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
