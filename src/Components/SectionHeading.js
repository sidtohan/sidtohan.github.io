// Lib
import { motion } from "framer-motion";

// Utils
import useAnimationTrigger from "../CustomHooks/useAnimationTrigger";
import { popInVariants } from "../Utils/variantMaker";
import { spring } from "../Utils/transitionMaker";

// Returns the heading for a section
const SectionHeading = ({ text }) => {
  const { ref, controls } = useAnimationTrigger({ threshold: 0.3 });
  return (
    <motion.h2
      className="section-heading"
      variants={popInVariants}
      initial="initial"
      animate={controls}
      transition={spring(1, 150)}
      ref={ref}
    >
      {text}
    </motion.h2>
  );
};

export default SectionHeading;
