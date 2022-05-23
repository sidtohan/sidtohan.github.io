import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";

// Utils
import {
  slideInTopDownVariants,
  fadeInLeftVariants,
  popInVariants,
} from "../Utils/variantMaker";
import { spring, tween } from "../Utils/transitionMaker";
import { secondary } from "../Utils/colors";

// Hooks
import useSectionTrigger from "../CustomHooks/useSectionTrigger";

const AboutMePara = (dat, i) => {
  return (
    <motion.p
      className="about-para"
      key={i}
      variants={fadeInLeftVariants}
      initial="initial"
      animate="animate"
      transition={spring(i + 4, 150)}
    >
      {dat}
    </motion.p>
  );
};

const About = ({ aboutMe, name, setIfPrimary, setCurrent }) => {
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.8,
    bgColor: secondary,
    sectionName: "About",
  });
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
    <section className="about" ref={ref}>
      <SectionHeading text="My name is" />
      <motion.span
        className="about-name"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(2, 150)}
      >
        {name}
      </motion.span>
      <motion.p
        className="about-header"
        variants={fadeInLeftVariants}
        initial="initial"
        animate="animate"
        transition={spring(3, 150)}
      >
        I'm a{" "}
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className="about-title"
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
