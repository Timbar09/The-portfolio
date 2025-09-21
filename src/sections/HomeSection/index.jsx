import { useContext } from "react";
import { ThemeContext } from "../../components/App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import Button from "../../components/Button";
import SocialLinkTree from "../../components/SocialLinkTree";
import Tooltip from "../../components/Tooltip";

import "../../assets/scss/sections/HomeSection.scss";

import darkBgImg from "../../assets/images/hero-bg-dark.webp";
import lightBgImg from "../../assets/images/hero-bg-light.webp";

const HomeSection = () => {
  const { theme } = useContext(ThemeContext);
  const isTablet = useMediaQuery("md", "down");

  const tertiaryButtonProps = isTablet
    ? { name: "Contact Me", linkTo: "#contact" }
    : { name: "More About Me", linkTo: "#about" };

  return (
    <section name="home" id="home" className="home__section">
      <div
        className="home__content container flex flex-col flex-jc-c gap-3"
        style={{
          backgroundImage: `url(${theme === "light" ? lightBgImg : darkBgImg})`,
        }}
      >
        <div className="home__group">
          <h1 className="title">
            <span className="title__greeting">
              Hi, I'm <span className="title__name">Miles</span>. I am a
            </span>
            Software <br /> Developer
          </h1>
        </div>

        <div className="home__group">
          <p className="home__description">
            I craft unique, functional and modern websites that captivate and
            invite engagement.
          </p>
        </div>

        <div className="home__buttons home__group flex flex-jc-c flex-ai-c flex_md-jc-fs flex-wrap gap-2">
          <div className="home__button">
            <Button name="View Projects" linkTo="#projects" />
            <Tooltip isLink>Go to Projects page</Tooltip>
          </div>

          <div className="home__button">
            <Button type="tertiary" {...tertiaryButtonProps} />
            {
              <Tooltip isLink>
                Go to {isTablet ? "Contact Me" : "About Me"} section
              </Tooltip>
            }
          </div>
        </div>

        <div className="home__group flex flex-jc-c flex_md-jc-fs">
          <SocialLinkTree />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
