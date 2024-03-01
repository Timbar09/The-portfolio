import ProjectList from "./ProjectList";

import "../../assets/scss/sections/ProjectsSection.scss";

const ProjectsSection = () => {
  return (
    <section name="projects" id="projects" className="project__section section">
      <div className="container">
        <h2 className="section__title">
          <span className="underlined">My</span> <span>Projects</span>
        </h2>

        <ProjectList />
      </div>
    </section>
  );
};

export default ProjectsSection;
