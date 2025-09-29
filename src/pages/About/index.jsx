import MetaTags from "../../components/MetaTags";

import PageTitle from "../PageTitle";
import AboutBio from "./AboutBio";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutTechnologies from "./AboutTechnologies";

import "../../assets/scss/pages/about/index.scss";

const About = () => {
  return (
    <>
      <MetaTags page="about" />

      <main name="about" id="about" className="about__page page">
        <div className="container">
          <PageTitle firstWord="About" secondWord="Me" underlineLeft={false} />

          <AboutBio />

          <AboutSoftSkills />

          <AboutTechnologies />
        </div>
      </main>
    </>
  );
};

export default About;
