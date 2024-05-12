import { motion } from "framer-motion";

/**
 * Adds a transition effect to the children of the component.
 *
 * @param {string} transitionName - The transition effect to apply (optional). Defaults to "fade-in". Other options are: "fade-in-right", "tilt".
 * @param {JSX.Element} children - The children to apply the transition effect to.
 * @param {string} className - The class name of the element to apply the transition effect to (optional).
 * @param {string} trigger - The trigger for the transition effect (optional). Defaults to "animate". Other options are "whileInView".
 * @param {string} elementTag - The tag of the element to apply the transition effect to (optional). Defaults to "div".
 * @param {string} offset - The offset for the transition effect (optional)
 * @param {number} duration - The duration of the transition effect (optional). Defaults to 0.75.
 *
 * @returns {JSX.Element} - The component with the transition effect
 */

const Transition = ({
  transitionName = "fade-in-up",
  children,
  className = "",
  trigger = "animate",
  elementTag = "div",
  offset = "0px",
  duration = 0.75,
}) => {
  const Tag = motion[elementTag];

  const animations = {
    "fade-in-up": {
      initial: {
        opacity: 0,
        top: 50,
      },
      animate: {
        opacity: 1,
        top: 0,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      },
    },
    "fade-in-right": {
      initial: {
        opacity: 0,
        left: -50,
      },
      animate: {
        opacity: 1,
        left: 0,
        transition: {
          duration: duration,
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
          duration: duration,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Tag
      className={className}
      initial={animations[transitionName].initial}
      {...(trigger === "animate"
        ? { animate: animations[transition].animate }
        : { whileInView: animations[transitionName].animate })}
      {...(trigger === "animate"
        ? {}
        : { viewport: { margin: offset, once: true } })}
    >
      {children}
    </Tag>
  );
};

export default Transition;
