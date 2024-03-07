import AboutBio from "./AboutBio";

import "../../assets/scss/sections/AboutSection.scss";

const AboutSection = () => {
  return (
    <section name="about" id="about" className="about__section section">
      <div className="container">
        <h2 className="section__title">
          <span>About</span> <span className="underlined">Me</span>
        </h2>

        <AboutBio />
      </div>
    </section>
  );
};

export default AboutSection;
