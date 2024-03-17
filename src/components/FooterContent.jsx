import Link from "../components/MyLink";

import "../assets/scss/components/FooterContent.scss";

const FooterContent = () => {
  return (
    <footer className="footer">
      <div className="container container px-2 py-3 flex flex-col flex_md-row flex-jc-sb gap-2">
        <div className="footer__author">
          <p>Made with: ❤️, ☕</p>

          <ul>
            <li>
              <Link linkText={"React"} linkTo={"https://reactjs.org"} />,
            </li>

            <li>
              <Link linkText={"Sass"} linkTo={"https://sass-lang.com"} /> and
            </li>

            <li>
              <Link
                linkText={"these awesome libraries"}
                linkTo={
                  "https://github.com/Timbar09/The-portfolio/blob/dev/package.json#L13C1-L38C4"
                }
              />
            </li>
          </ul>
        </div>

        <p className="footer__copyright">
          Copyright &copy;{" "}
          <Link
            linkText={"Miles Mosweu"}
            linkTo={"https://miles-mosweu.netlify.app"}
          />{" "}
          {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterContent;
