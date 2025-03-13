"use client";
import { motion } from "framer-motion";

const animationVariants = {
  fadeUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
};

const AnimatedHeading = ({ text, variant = "fadeUp", className = "" }) => {
  return (
    <motion.h2
      className={`text-3xl font-medium mb-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      variants={animationVariants[variant]}
      transition={{ duration: 0.7 }}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedHeading;
