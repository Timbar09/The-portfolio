import SectionTitle from "../PageTitle";
import AboutBio from "./AboutBio";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutTechnologies from "./AboutTechnologies";

import "../../assets/scss/sections/about/index.scss";

const About = () => {
  return (
    <main name="about" id="about" className="about__section page">
      <div className="container">
        <SectionTitle firstWord="About" secondWord="Me" underlineLeft={false} />

        <AboutBio />

        <AboutSoftSkills />

        <AboutTechnologies />
      </div>
    </main>
  );
};

export default About;
