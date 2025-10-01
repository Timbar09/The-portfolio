import { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModalContext } from "../../components/App";

import TechItem from "./TechItem";
import Button from "../../components/Button";
import Tooltip from "../../components/Tooltip";

import { FaGitAlt as SourceCodeIcon } from "react-icons/fa6";
import { IoCloseCircle as CloseModalIcon } from "react-icons/io5";

import { trapFocus, modalAnimationProps } from "./projectUtils";

import imagesObj from "./projectImages";

const ProjectModal = () => {
  const modalRef = useRef();
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  const { overview, problem, features, summary } = selectedProject.description;

  const { bgImage } = imagesObj[selectedProject.imagesFile];

  const liveInactiveLinkClass = selectedProject.live ? " " : " inactive ";
  const codeInactiveLinkClass = selectedProject.code ? " " : " inactive ";

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
          <div className="project__modal--container flex flex-col">
            <header className="project__modal--header flex flex-jc-sb flex-wrap gap-2 py-2">
              <button
                className="project__modal--header__close-button grid"
                type="button"
                onClick={toggleProjectModal}
                title="Close project modal"
              >
                <CloseModalIcon />
              </button>

              <h2>{selectedProject.title}</h2>

              <div className="project__modal--header__buttons flex flex-ai-c flex-wrap gap-2">
                <span
                  className={`project__modal--header__button${liveInactiveLinkClass}project__modal--header__button--live relative`}
                >
                  <Button
                    variant={selectedProject.live ? "primary" : "tertiary"}
                    text={
                      selectedProject.live
                        ? "Live Demo"
                        : "Live Demo Unavailable"
                    }
                    path={selectedProject.live ? selectedProject.live : null}
                  />

                  <Tooltip
                    isLink={selectedProject.live}
                    styles={{ fontSize: "0.85rem", maxWidth: "15rem" }}
                  >
                    {selectedProject.live
                      ? "Visit the live website"
                      : "Live demo is unavailable for this project"}
                  </Tooltip>
                </span>

                <span
                  className={`project__modal--header__button${codeInactiveLinkClass}project__modal--header__button--code relative`}
                >
                  <Button
                    variant="secondary"
                    text="Source Code"
                    path={selectedProject.code}
                    icon={<SourceCodeIcon />}
                  />

                  <Tooltip
                    isLink={selectedProject.code}
                    styles={{ fontSize: "0.85rem", maxWidth: "15rem" }}
                  >
                    {selectedProject.code
                      ? "Check out the source code on GitHub"
                      : "Source code is unavailable for this project"}
                  </Tooltip>
                </span>
              </div>
            </header>

            <div className="project__modal--body">
              <div className="project__modal--body__image">
                <img
                  src={bgImage}
                  alt={`${selectedProject.title} project image`}
                  className="grid"
                />
              </div>

              <div className="project__modal--body__text p-2 grid grid-gap-2">
                <section className="project__modal--body__text--overview">
                  <h3>Overview</h3>

                  <p className="my-2"> {overview} </p>
                </section>

                <section className="project__modal--body__text--tech">
                  <h3>Technologies Used</h3>

                  <ul className="flex flex-jc-c flex_lg-jc-fs flex-ai-fs flex-wrap gap-1 my-2">
                    {selectedProject.tech.map((item, index) => (
                      <TechItem key={index} item={item} isCardHovered={true} />
                    ))}
                  </ul>
                </section>

                <section className="project__modal--body__text--problem">
                  <h3>Problem Statement</h3>

                  <p className="my-2"> {problem} </p>
                </section>

                <section className="project__modal--body__text--features">
                  <h3>Features & Functionalities</h3>

                  <ul className="pl-3 my-2">
                    {features.map((item, index) => (
                      <li key={index}>
                        <span>{`${item.split(":")[0]}: `}</span>
                        {item.split(":")[1]}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="project__modal--body__text--summary">
                  <h3>Summary</h3>

                  <p className="my-2"> {summary} </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
