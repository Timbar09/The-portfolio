import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "./App";

const PageBackgroundImage = ({ images, className, style }) => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundImage: `url(${theme === "light" ? images.light : images.dark})`,
    ...style,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 10, delay: 2 }}
      className={`page-background-image p-2 ${className}`}
      style={styles}
    />
  );
};

export default PageBackgroundImage;
