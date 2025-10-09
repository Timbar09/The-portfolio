import { useContext } from "react";

import { ThemeContext } from "../../components/App";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import SocialLinkTree from "../../components/SocialLinkTree";
import PageBackgroundImage from "../../components/PageBackgroundImage";

import darkBgImg from "../../assets/images/hero-bg-dark.webp";
import lightBgImg from "../../assets/images/hero-bg-light.webp";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isTablet = useMediaQuery("md", "down");

  const tertiaryButtonProps = isTablet
    ? { text: "Contact Me", path: "/contact" }
    : { text: "More About Me", path: "/about" };

  return (
    <section className="home__hero">
      <div
        className="container relative flex flex-col flex-jc-c gap-3"
        // style={{
        //   backgroundImage: `url(${theme === "light" ? lightBgImg : darkBgImg})`,
        // }}
      >
        <PageBackgroundImage images={{ light: lightBgImg, dark: darkBgImg }} />

        <div className="home__hero--group">
          <h1 className="title">
            <span className="title__greeting">
              Hi, I'm <span className="title__name">Miles</span>. I am a
            </span>
            Software <br /> Developer
          </h1>
        </div>

        <div className="home__hero--group">
          <p className="home__hero--description">
            I craft unique, functional and modern websites that captivate and
            invite engagement.
          </p>
        </div>

        <div className="home__hero--buttons home__hero--group flex flex-jc-c flex-ai-c flex_md-jc-fs flex-wrap gap-2">
          <div className="home__hero--button">
            <Button text="View Portfolio" path="/portfolio" />
            <Tooltip isLink>Check out my projects</Tooltip>
          </div>

          <div className="home__hero--button">
            <Button variant="tertiary" {...tertiaryButtonProps} />
            {
              <Tooltip isLink>
                {isTablet ? "Get in touch with me" : "Learn more about me"}
              </Tooltip>
            }
          </div>
        </div>

        <div className="home__hero--group flex flex-jc-c flex_md-jc-fs">
          <SocialLinkTree />
        </div>
      </div>
    </section>
  );
};

export default Hero;
