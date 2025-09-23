import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IoIosArrowForward as LinkIcon } from "react-icons/io";

import "../assets/scss/components/Tooltip.scss";

const Tooltip = ({ children, isLink = false, styles = {} }) => {
  const [visible, setVisible] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current?.parentNode;
    if (!parent) return;

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    parent.addEventListener("mouseenter", show);
    parent.addEventListener("mouseleave", hide);

    return () => {
      parent.removeEventListener("mouseenter", show);
      parent.removeEventListener("mouseleave", hide);
    };
  }, []);

  const tooltipAnimationProps = {
    initial: { opacity: 0, y: -10, rotate: 0 },
    animate: {
      opacity: 1,
      y: 0,
      rotate: [0, -5, 5, 0],
    },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4 },
  };

  return (
    <AnimatePresence>
      <span
        key={crypto.randomUUID()}
        ref={parentRef}
        style={{ display: "none" }}
      />

      {visible && (
        <motion.span
          key={crypto.randomUUID()}
          ref={parentRef}
          className="tooltip"
          {...tooltipAnimationProps}
          style={styles}
        >
          <p className="tooltip__text">{children}</p>
          {isLink && (
            <span className="tooltip__icon--container">
              <LinkIcon className="tooltip__icon tooltip__icon--first" />
              <LinkIcon className="tooltip__icon tooltip__icon--second" />
            </span>
          )}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
