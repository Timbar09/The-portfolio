import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import ProjectData from "../../data/projects.json";

const ProjectList = () => {
  const data = ProjectData.slice(0, 5);

  return (
    <ul className="project__list grid grid_md-col grid-gap-1">
      {data.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}

      <ProjectModal />
    </ul>
  );
};

export default ProjectList;
