import SectionTitle from "../SectionTitle";
import AboutBio from "./AboutBio";
import AboutSoftSkills from "./AboutSoftSkills";

import "../../assets/scss/sections/AboutSection.scss";

const AboutSection = () => {
  return (
    <section name="about" id="about" className="about__section section">
      <div className="container">
        <SectionTitle firstWord="About" secondWord="Me" underlineLeft={false} />

        <AboutBio />

        <AboutSoftSkills />
      </div>
    </section>
  );
};

export default AboutSection;
