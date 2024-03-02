import { useContext } from "react";
import { ProjectModalContext } from "../../components/App";

const ProjectModal = () => {
  const { toggleProjectModal } = useContext(ProjectModalContext);

  return (
    <div className="project__modal">
      <button type="button" onClick={toggleProjectModal}>
        Close
      </button>

      <h2>Project Modal</h2>
    </div>
  );
};

export default ProjectModal;
