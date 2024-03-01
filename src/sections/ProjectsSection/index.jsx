import ProjectCard from "./ProjectCard";

import "../../assets/scss/sections/ProjectsSection.scss";

const ProjectsSection = () => {
  return (
    <section name="projects" id="projects" className="project__section section">
      <div className="container">
        <h2 class="section__title">
          <span class="underlined">My</span> <span>Projects</span>
        </h2>

        <ul class="project__list">
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec."
          />

          <a href="pages/projects.html" class="projects__all-btn">
            View more projects
          </a>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
