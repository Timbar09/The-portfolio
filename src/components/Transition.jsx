import { motion } from "framer-motion";

const animations = {
  "fade-in": {
    initial: {
      opacity: 0,
      top: 50,
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        type: "spring",
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  },
  tilt: {
    initial: {
      rotateX: 60,
      rotateY: 10,
      scale: 0.85,
    },
    animate: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: "easeInOut",
      },
    },
  },
};

/**
 * Adds a transition effect to the children of the component.
 *
 * @param {string} transitionName - The transition effect to apply (optional). Defaults to "fade-in". Other options are "tilt".
 * @param {JSX.Element} children - The children to apply the transition effect to
 * @param {string} className - The class name of the element to apply the transition effect to (optional)
 * @param {string} trigger - The trigger for the transition effect (optional)
 * @param {string} elementTag - The tag of the element to apply the transition effect to (optional)
 *
 * @returns {JSX.Element} - The component with the transition effect
 */

const Transition = ({
  transitionName = "fade-in",
  children,
  className = "",
  trigger = "animate",
  elementTag = "div",
}) => {
  const Tag = motion[elementTag];

  return (
    <Tag
      className={className}
      initial={animations[transitionName].initial}
      {...(trigger === "animate"
        ? { animate: animations[transition].animate }
        : { whileInView: animations[transitionName].animate })}
      {...(trigger === "animate"
        ? {}
        : { viewport: { margin: "-25px", once: true } })}
    >
      {children}
    </Tag>
  );
};

export default Transition;
