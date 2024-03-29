import Button from "../../components/Button";
import SocialLinkTree from "../../components/SocialLinkTree";

import "../../assets/scss/sections/HomeSection.scss";

const HomeSection = () => {
  return (
    <section name="home" id="home" className="home__section section">
      <div className="home__content container flex flex-col flex-jc-c gap-3">
        <div className="home__group">
          <h1 className="title">
            <span className="title__greeting">
              Hi, I'm <span className="title__name">Miles</span>. I am a
            </span>
            Software Developer
          </h1>
        </div>

        <div className="home__group">
          <p className="home__description">
            I craft unique, modern websites that captivate and invite
            engagement, enhancing your business or product&apos;s online
            presence.
          </p>
        </div>

        <div className="home__buttons home__group flex flex-jc-c flex-ai-c flex_md-jc-fs flex-wrap gap-2">
          <Button name="View Projects" linkTo="#projects" />

          <Button type="tertiary" name="More About Me" linkTo="#about" />
        </div>

        <div className="home__group flex flex-jc-c flex_md-jc-fs">
          <SocialLinkTree />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
