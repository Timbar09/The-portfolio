import Link from "../components/MyLink";

import { IoLogoReact as ReactIcon } from "react-icons/io5";
import { BiLogoSass as SassIcon } from "react-icons/bi";

import "../assets/scss/components/FooterContent.scss";

const FooterContent = () => {
  return (
    <footer className="footer">
      <div className="container container px-2 py-3 flex flex-col flex_md-row flex-jc-sb gap-2">
        <div className="footer__author">
          <p className="flex flex-ai-c flex-jc-c flex_md-jc-fs gap-1">
            Made with: <span title="Love">❤️</span> ,{" "}
            <span title="Coffee">☕</span>,{" "}
            <ReactIcon title="React" style={{ color: "#61dafb" }} />,{" "}
            <SassIcon title="Sass" style={{ color: "#cc6699" }} /> and{" "}
            <Link
              linkText={"more..."}
              linkTo={
                "https://github.com/Timbar09/The-portfolio/blob/dev/package.json#L13C1-L38C4"
              }
            />
          </p>
        </div>

        <p className="footer__copyright">
          Copyright &copy; Miles Mosweu {new Date().getFullYear()} | All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterContent;
