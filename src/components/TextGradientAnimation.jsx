import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";

function TextGradientAnimation({ textGradient, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }} // Starts below the div
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }} // Moves up to the center
      transition={{ duration: 1 }} // Transition duration
      className="gradient-text"
    >
      {textGradient}
    </motion.h1>
  );
}

export default TextGradientAnimation;
