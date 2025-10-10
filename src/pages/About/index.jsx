import MetaTags from "../../components/MetaTags";

import PageTitle from "../PageTitle";
import AboutBio from "./AboutBio";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutTechnologies from "./AboutTechnologies";
import { PageTransition } from "../../components/Animations";

import "../../assets/scss/pages/about/index.scss";

const About = () => {
  return (
    <PageTransition>
      <MetaTags page="about" />

      <main name="about" id="about" className="about__page page">
        <div className="container">
          <PageTitle firstWord="About" secondWord="Me" fadeLeft={false} />

          <AboutBio />

          <AboutSoftSkills />

          <AboutTechnologies />
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
