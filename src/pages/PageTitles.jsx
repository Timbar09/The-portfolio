import { motion } from "framer-motion";
import { AnimatedComponent } from "../components/Animations";

import MyLink from "../components/MyLink";
import Tooltip from "../components/Tooltip";

const Word = ({ fade, wordPosition, children }) => {
  const firstFadeVariants = {
    initial: { opacity: 0, left: -20 },
    animate: {
      opacity: 1,
      left: 0,
    },
    transition: { duration: 3, delay: 2 },
  };

  const secondFadeVariants = {
    initial: { opacity: 0, right: 20 },
    animate: {
      opacity: 1,
      right: 0,
    },
    transition: { duration: 3, delay: 2 },
  };

  const fadeAnimation =
    wordPosition === "first" ? firstFadeVariants : secondFadeVariants;

  return (
    <span className="page__title--word">
      {fade ? (
        <motion.span
          className={`faded-word faded-word__${wordPosition}`}
          initial={fadeAnimation.initial}
          animate={fadeAnimation.animate}
          transition={fadeAnimation.transition}
        >
          {children}
        </motion.span>
      ) : (
        children
      )}
    </span>
  );
};

/**
 * A component that displays a page title with two words, each potentially having a fade-in animation from opposite sides.
 *
 * @param {string} firstWord - The first word of the title.
 * @param {string} secondWord - The second word of the title.
 * @param {boolean} fadeLeft - Whether to apply the fade-in effect to the first word (default: true).
 */

export const PageTitle = ({ firstWord, secondWord, fadeLeft = true }) => {
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatedComponent tag="h1" className="title page__title">
      <Word fade={fadeLeft} wordPosition="first">
        {firstWord}
      </Word>{" "}
      <Word fade={!fadeLeft} wordPosition="second">
        {secondWord}
      </Word>
    </AnimatedComponent>
  );
};

/**
 * A component that displays a page subtitle with optional highlighted link text.
 * @param {string} text - The subtitle text, which may include the link text.
 * @param {object} link - An optional object containing link properties: text, path, and tooltip. (text is case-sensitive)
 * @param {boolean} isShort - An optional boolean to apply a shorter subtitle style (default: false).
 */

export const PageSubtitle = ({ text, linkData = null, isShort = false }) => {
  const processText = () => {
    if (!linkData) return text;

    if (text.includes(linkData.text)) {
      const [beforeText, afterText] = text.split(linkData.text);

      return (
        <>
          {beforeText}

          <span className="page__subtitle--highlight relative">
            <MyLink
              text={linkData.text}
              path={linkData.path}
              variant="highlighted"
              showIcon={false}
            />

            {linkData.tooltip && (
              <Tooltip isLink styles={{ fontSize: "0.5em", maxWidth: "20rem" }}>
                {linkData.tooltip}
              </Tooltip>
            )}
          </span>

          {afterText}
        </>
      );
    }

    return text;
  };

  const processedText = processText();

  return (
    <AnimatedComponent
      tag="h2"
      duration={1}
      delay={0.25}
      className={`page__subtitle ${
        isShort ? "page__subtitle--short" : ""
      } relative`}
    >
      {processedText}
    </AnimatedComponent>
  );
};
