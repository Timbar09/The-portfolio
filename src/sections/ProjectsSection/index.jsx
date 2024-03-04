import { Link } from "react-scroll";

import ProjectList from "./ProjectList";

import "../../assets/scss/sections/ProjectsSection.scss";

const ProjectsSection = () => {
  return (
    <section name="projects" id="projects" className="project__section section">
      <div className="container">
        <header className="project__section--header">
          <h2 className="section__title">
            <span className="underlined">My</span> <span>Projects</span>
          </h2>

          <p className="section__subtitle">
            I've worked on numerous projects, many open-source. Feel free to
            explore and contribute to any that interest you. I'm always seeking
            new challenges and collaborations, so if you have an idea,{" "}
            <Link
              className="link"
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
            >
              reach out!
            </Link>{" "}
            Excited to hear from you. 😎
          </p>
        </header>

        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectsSection;
