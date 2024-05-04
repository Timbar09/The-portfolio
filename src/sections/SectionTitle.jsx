import { motion } from "framer-motion";

const Word = ({ underline, children }) => {
  const underlineAnimation = {
    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
    bottom: ["150%", "0%", "50%", "0%", "25%", "0%", "0%", "0%"],
    width: ["8%", "8%", "8%", "8%", "8%", "8%", "8%", "100%"],
    transition: {
      duration: 2,
      times: [0, 0.2, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      ease: "linear",
    },
  };

  return (
    <span className="section__title--word">
      {underline ? (
        <motion.span
          className="underlined-word"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {children}
        </motion.span>
      ) : (
        children
      )}

      {underline && (
        <motion.span
          className="underline"
          initial={{ opacity: 0, bottom: "150%", width: "8%" }}
          whileInView={underlineAnimation}
          viewport={{ margin: "-25%", once: true }}
        />
      )}
    </span>
  );
};

const SectionTitle = ({ firstWord, secondWord, underlineLeft = true }) => (
  <h2 className="section__title">
    <Word underline={underlineLeft}>{firstWord}</Word>{" "}
    <Word underline={!underlineLeft}>{secondWord}</Word>
  </h2>
);

export default SectionTitle;
