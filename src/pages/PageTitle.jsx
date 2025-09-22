import { motion } from "framer-motion";

const Word = ({ underline, children }) => {
  const underlineAnimation = {
    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
    left: ["50%", "40%", "30%", "20%", "10%", "0%", "0%", "0%"],
    bottom: ["150%", "0%", "40%", "0%", "20%", "0%", "1S0%", "0%"],
    height: [
      "0.1em",
      "0.05em",
      "0.1em",
      "0.05em",
      "0.1em",
      "0.075em",
      "0.075em",
      "0.075em",
    ],
    width: [
      "0.075em",
      "0.075em",
      "0.075em",
      "0.075em",
      "0.075em",
      "0.075em",
      "0.075em",
      "100%",
    ],
    transition: {
      duration: 2,
      times: [0, 0.2, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      ease: "linear",
    },
  };

  return (
    <span className="page__title--word">
      {underline ? (
        <motion.span
          className="underlined-word"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {children}
        </motion.span>
      ) : (
        children
      )}

      {underline && (
        <motion.span
          className="underline"
          initial={{ opacity: 0, bottom: "150%", width: "5%" }}
          animate={underlineAnimation}
        />
      )}
    </span>
  );
};

const PageTitle = ({ firstWord, secondWord, underlineLeft = true }) => (
  <h1 className="title page__title">
    <Word underline={underlineLeft}>{firstWord}</Word>{" "}
    <Word underline={!underlineLeft}>{secondWord}</Word>
  </h1>
);

export default PageTitle;
