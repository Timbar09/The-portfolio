import SectionTitle from "../SectionTitle";
import AboutBio from "./AboutBio";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutTechnologies from "./AboutTechnologies";

import "../../assets/scss/sections/about/index.scss";

const AboutSection = () => {
  return (
    <section name="about" id="about" className="about__section section">
      <div className="container">
        <SectionTitle firstWord="About" secondWord="Me" underlineLeft={false} />

        <AboutBio />

        <AboutSoftSkills />

        <AboutTechnologies />
      </div>
    </section>
  );
};

export default AboutSection;
