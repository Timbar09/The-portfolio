import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import ProjectData from "../../data/projects.json";

const ProjectList = () => {
  const data = ProjectData.slice(0, 5);

  return (
    <>
      <ul className="portfolio__project--list grid">
        {data.map((project, index) => {
          return <ProjectCard key={index} project={project} index={index} />;
        })}

        <ProjectModal />
      </ul>
    </>
  );
};

export default ProjectList;
