import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

import Button from "../../components/Button";

import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";
import { FaGitAlt as SourceCodeIcon } from "react-icons/fa6";

const ProjectModal = () => {
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  return (
    <div
      className={`project__modal p-2 ${isProjectModalOpen ? "open" : "closed"}`}
    >
      <div className="project__modal--container">
        <button
          className="project__modal--close-button grid"
          type="button"
          onClick={toggleProjectModal}
          title="Close project modal"
        >
          <CloseModalIcon />
        </button>

        <div className="project__modal--image">
          <img src={selectedProject.bgImage} alt={selectedProject.title} />
        </div>

        <div className="project__modal--header flex flex-jc-sb flex-wrap gap-2 p-2">
          <h2>{selectedProject.title}</h2>

          <div className="project__modal--buttons flex flex-wrap gap-2">
            <Button
              type="primary"
              name="Live Demo"
              linkTo="https://www.google.com"
            />

            <Button
              type="secondary"
              name="Source Code"
              linkTo="https://github.com"
              icon={<SourceCodeIcon />}
            />
          </div>
        </div>

        <p className="px-2">{selectedProject.description}</p>

        <ul className="project__modal--tech project__card--tech flex flex-ai-c gap-1 px-2">
          {selectedProject.tech.map((item, index) => (
            <li key={index} className="project__card--tech__item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;
