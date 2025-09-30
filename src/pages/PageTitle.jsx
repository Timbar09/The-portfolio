import { motion } from "framer-motion";

const Word = ({ fade, wordPosition, children }) => {
  const firstFadeAnimation = {
    initial: { opacity: 0, left: -20 },
    animate: {
      opacity: 1,
      left: 0,
    },
    transition: { duration: 3, delay: 2 },
  };

  const secondFadeAnimation = {
    initial: { opacity: 0, right: 20 },
    animate: {
      opacity: 1,
      right: 0,
    },
    transition: { duration: 3, delay: 2 },
  };

  const fadeAnimation =
    wordPosition === "first" ? firstFadeAnimation : secondFadeAnimation;

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

const PageTitle = ({ firstWord, secondWord, fadeLeft = true }) => (
  <h1 className="title page__title">
    <Word fade={fadeLeft} wordPosition="first">
      {firstWord}
    </Word>{" "}
    <Word fade={!fadeLeft} wordPosition="second">
      {secondWord}
    </Word>
  </h1>
);

export default PageTitle;
