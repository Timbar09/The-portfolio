import { motion } from "framer-motion";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import { animations, pageTransitionVariants } from "./animationUtils";

/**
 * A component that applies a transition effect to its children using Framer Motion.
 *
 * @param {string} name - The name of the transition effect. Options are "fadeInUp", "fadeInRight", "tilt", and "enter". Defaults to "fadeInUp".
 * @param {JSX.Element} children - The children elements to apply the transition effect to.
 * @param {string} className - The class name of the element to apply the transition effect to (optional).
 * @param {string} trigger - The trigger for the transition effect (optional). Defaults to "animate". Other options are "whileInView".
 * @param {string} tag - The tag of the element to apply the transition effect to (optional). Defaults to "div".
 * @param {string} offset - The offset for the transition effect (optional)
 * @param {number} duration - The duration of the transition effect (optional). Defaults to 0.75.
 * @param {number} delay - The delay of the transition effect (optional). Defaults to 0.
 * @param {object} style - The style object to apply to the element (optional).
 *
 * @returns {JSX.Element} - The component with the transition effect
 */

export const AnimatedComponent = ({
  name = "fadeInUp",
  children,
  className = "",
  trigger = "animate",
  tag = "div",
  offset = "-20%",
  duration = 0.75,
  delay = 0,
  style = {},
}) => {
  const Tag = motion[tag] || motion.div;

  const animationFunc = animations[name] || animations.fadeInUp;
  const { initial, animate } = animationFunc(duration, delay);

  return (
    <Tag
      className={className}
      initial={initial}
      style={style}
      {...(trigger === "animate"
        ? { animate: animate }
        : { whileInView: animate })}
      {...(trigger === "animate"
        ? {}
        : { viewport: { margin: offset, once: true } })}
    >
      {children}
    </Tag>
  );
};

/**
 * A component that applies a page transition effect to its children (Page) using Framer Motion.
 * The Header and Footer components are included within the transition effect.
 *
 * @param {JSX.Element} children - The children elements (Page) to apply the transition effect to.
 *
 * @returns {JSX.Element} - The component with the page transition effect
 */

export const PageTransition = ({ children }) => {
  const { appear, slideUp, dropBack } = pageTransitionVariants;

  const animate = (variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  });

  return (
    <div className="page-transition">
      <motion.div {...animate(slideUp)} className="slider" />

      <motion.div {...animate(dropBack)}>
        <motion.div {...animate(appear)}>
          {/* Header & Footer should be in the Layout component but this works for the page transition */}
          <Header />

          {children}

          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};
