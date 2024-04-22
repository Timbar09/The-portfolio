import { Link } from "react-scroll";

import SectionTitle from "../SectionTitle";
import ProjectList from "./ProjectList";

import "../../assets/scss/sections/ProjectsSection.scss";

const ProjectsSection = () => {
  return (
    <section name="projects" id="projects" className="project__section section">
      <div className="container">
        <header className="project__section--header">
          <SectionTitle firstWord="My" secondWord="Projects" />

          <p className="section__subtitle">
            I've worked on numerous projects, many open-source. Feel free to
            explore and contribute to any that interest you. I'm always seeking
            new challenges and collaborations, so if you have an idea,{" "}
            <Link to="contact" smooth={true} duration={500} className="link">
              let's talk
            </Link>
            ! Excited to hear from you. 😎
          </p>
        </header>

        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectsSection;
