import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Variants
import {
  slideInTopDownVariants,
  fadeInLeftVariants,
  popInVariants,
} from "../Utils/variantMaker";

// Transitions
import { spring, tween } from "../Utils/transitionMaker";

const AboutMePara = (dat, i) => {
  return (
    <motion.p
      className="about-me-para"
      key={i}
      variants={fadeInLeftVariants}
      initial="initial"
      animate="animate"
      transition={spring(i + 3)}
    >
      {dat}
    </motion.p>
  );
};
const About = ({ aboutMe, name }) => {
  const [displayTitle, setDisplayTitle] = useState(0);
  const titles = [
    "Fullstack Developer",
    "Competitive Programmer",
    "Pythonista",
  ];

  setTimeout(() => {
    setDisplayTitle((displayTitle + 1) % titles.length);
  }, 2000);

  return (
    <section className="about-me">
      <motion.h2
        className="section-heading"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(1)}
      >
        My name is
      </motion.h2>

      <motion.span
        className="about-me-name"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(2)}
      >
        Siddhant Tohan
      </motion.span>
      <motion.p
        className="about-me-header"
        variants={fadeInLeftVariants}
        initial="initial"
        animate="animate"
        transition={spring(3)}
      >
        I'm a{" "}
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className="about-me-title"
            variants={slideInTopDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={titles[displayTitle]}
            transition={tween(0)}
          >
            {titles[displayTitle]}
          </motion.span>
        </AnimatePresence>
      </motion.p>
      {aboutMe.map((dat, i) => AboutMePara(dat, i))}
    </section>
  );
};
export default About;
