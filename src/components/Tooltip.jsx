import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IoIosArrowForward as LinkIcon } from "react-icons/io";

import "../assets/scss/components/Tooltip.scss";

const Tooltip = ({ children, isLink = false, styles = {} }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({});
  const parentRef = useRef(null);
  const tooltipRef = useRef(null);

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

  useEffect(() => {
    if (visible && parentRef.current && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const difference = {
        left: tooltipRect.left,
        right: window.innerWidth - tooltipRect.right,
      };

      const sideCloserToEdge =
        difference.left < difference.right ? "left" : "right";

      const isOverflowing = difference[sideCloserToEdge] < 0;

      if (!isOverflowing) return;

      let left = "50%";
      let translate = "-50% 0";
      let right = "auto";

      if (sideCloserToEdge === "left") {
        left = "0px";
        right = "auto";
        translate = "none";
      } else {
        right = "0px";
        left = "auto";
        translate = "none";
      }

      setPosition({ left, right, translate });
    }
  }, [visible]);

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

  const customVariables = {
    "--left": position.left === "0px" ? "16px" : position.left,
    "--right": position.right === "0px" ? "16px" : position.right,
    "--translate": position.translate,
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
          ref={tooltipRef}
          className="tooltip"
          {...tooltipAnimationProps}
          style={{
            ...styles,
            ...position,
            ...customVariables,
          }}
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
