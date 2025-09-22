import { useContext, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModalContext } from '../../components/App';

import Button from '../../components/Button';
import TechItem from './TechItem';

import { IoCloseCircle as CloseModalIcon } from 'react-icons/io5';
import { FaGitAlt as SourceCodeIcon } from 'react-icons/fa6';

import { trapFocus, modalAnimationProps } from './projectUtils';

import imagesObj from './projectImages';

const ProjectModal = () => {
  const modalRef = useRef();
  const { toggleProjectModal, selectedProject, isProjectModalOpen } =
    useContext(ProjectModalContext);

  const { overview, problem, features, summary } = selectedProject.description;

  const { bgImage } = imagesObj[selectedProject.imagesFile];

  useEffect(() => {
    trapFocus(isProjectModalOpen, modalRef);
  }, [isProjectModalOpen]);

  return (
    <AnimatePresence>
      {isProjectModalOpen && (
      <motion.div ref={modalRef} className="project__modal p-2" {...modalAnimationProps}>
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

            <div className="project__modal--header__buttons flex flex-wrap gap-2">
              {selectedProject.live.length > 0 && (
                <Button type="primary" name="Live Demo" linkTo={selectedProject.live} />
              )}

              <Button
                type="secondary"
                name="Source Code"
                linkTo={selectedProject.source}
                icon={<SourceCodeIcon />}
              />
            </div>
          </header>

          <div className="project__modal--body">
            <div className="project__modal--body__image">
              <img src={bgImage} alt={`${selectedProject.title} project image`} className="grid" />
            </div>

            <div className="project__modal--body__text p-2 grid grid-gap-2">
              <section className="project__modal--body__text--overview">
                <h3>Overview</h3>
                <p> {overview} </p>
              </section>

              <section className="project__modal--body__text--tech">
                <h3>Technologies Used</h3>
                <ul className="flex flex-ai-fs flex-wrap gap-1">
                  {selectedProject.tech.map((item, index) => (
                    <TechItem key={index} item={item} isCardHovered={true} />
                  ))}
                </ul>
              </section>

              <section className="project__modal--body__text--problem">
                <h3>Problem Statement</h3>
                <p> {problem} </p>
              </section>

              <section className="project__modal--body__text--features">
                <h3>Features & Functionalities</h3>
                <ul className="pl-3">
                  {features.map((item, index) => (
                    <li key={index}>
                      <span>{`${item.split(':')[0]}: `}</span>
                      {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="project__modal--body__text--summary">
                <h3>Summary</h3>
                <p> {summary} </p>
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
