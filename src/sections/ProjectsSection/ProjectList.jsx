import ProjectCard from "./ProjectCard";

import neonManImg from "../../assets/images/projects/man-in-neon.jpg";
import coderImg from "../../assets/images/projects/coder.jpg";
import darkSkyImg from "../../assets/images/projects/dark-sky.jpg";
import parrotImg from "../../assets/images/projects/parrot.jpg";

const data = [
  {
    title: "Main Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: neonManImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: coderImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: darkSkyImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.",
    bgImage: parrotImg,
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectList = () => {
  return (
    <ul class="project__list">
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          bgImage={item.bgImage}
          tech={item.tech}
        />
      ))}

      <a href="pages/projects.html" class="projects__all-btn">
        View more projects
      </a>
    </ul>
  );
};

export default ProjectList;
