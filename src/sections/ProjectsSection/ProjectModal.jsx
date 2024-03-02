import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";

const ProjectModal = () => {
  const { toggleProjectModal, selectedProject } =
    useContext(ProjectModalContext);

  return (
    <div className="project__modal p-2">
      <button
        className="project__modal--close-button grid"
        type="button"
        onClick={toggleProjectModal}
        title="Close project modal"
      >
        <CloseModalIcon />
      </button>

      <h2>{selectedProject.title}</h2>
    </div>
  );
};

export default ProjectModal;
