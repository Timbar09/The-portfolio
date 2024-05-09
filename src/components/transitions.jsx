import { motion, transform } from "framer-motion";

const FadeInAnimation = {
  opacity: 1,
  top: 0,
  transition: {
    duration: 0.75,
    ease: "easeInOut",
  },
};

/**
 * Adds a transition effect to the children of the component.
 *
 * @param {JSX.Element} children - The children to apply the transition effect to
 * @param {string} className - The class name of the element to apply the transition effect to (optional)
 * @param {string} trigger - The trigger for the transition effect (optional)
 * @param {string} elementTag - The tag of the element to apply the transition effect to (optional)
 *
 * @returns {JSX.Element} - The component with the transition effect
 */

export const FadeIn = ({
  children,
  className = "",
  trigger = "animate",
  elementTag = "div",
}) => {
  const Tag = motion[elementTag];

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        top: 50,
      }}
      {...(trigger === "animate"
        ? { animate: FadeInAnimation }
        : { whileInView: FadeInAnimation })}
      {...(trigger === "animate"
        ? {}
        : { viewport: { margin: "-25px" }, once: true })}
    >
      {children}
    </Tag>
  );
};
