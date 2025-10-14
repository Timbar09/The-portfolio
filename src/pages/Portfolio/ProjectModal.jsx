import { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModalContext } from "../../components/App";

import ProjectModalHeader from "./ProjectModalHeader";
import ProjectModalImages from "./ProjectModalImages";
import ProjectModalText from "./ProjectModalText";

import { trapFocus, modalAnimationProps } from "./projectUtils";

import imagesObj from "./projectImages";

const ProjectModal = () => {
  const modalRef = useRef();
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  const { bgImages } = imagesObj[selectedProject.imagesFile];

  useEffect(() => {
    trapFocus(isProjectModalOpen, modalRef);
  }, [isProjectModalOpen]);

  return (
    <AnimatePresence>
      {isProjectModalOpen && (
        <motion.div
          ref={modalRef}
          className="project__modal p-2"
          {...modalAnimationProps}
        >
          <ProjectModalHeader
            project={selectedProject}
            handleCloseButtonClick={toggleProjectModal}
          />

          <div className="project__modal--container flex flex-col">
            <div className="project__modal--body">
              <ProjectModalImages imageUrls={bgImages} />

              <ProjectModalText project={selectedProject} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
