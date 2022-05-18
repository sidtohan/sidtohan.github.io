import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutMePara = (dat, i) => {
  return (
    <p className="about-me-para" key={i}>
      {dat}
    </p>
  );
};
const About = ({ aboutMe, name }) => {
  const [displayTitle, setDisplayTitle] = useState(0);
  const titles = [
    "Fullstack Developer",
    "Competitive Programmer",
    "Pythonista",
  ];

  // Title Variants
  const titleVariants = {
    initial: {
      y: -30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 30,
      opacity: 0,
    },
    transition: {
      type: "tween",
    },
  };

  setTimeout(() => {
    setDisplayTitle((displayTitle + 1) % titles.length);
  }, 2000);

  return (
    <section className="about-me">
      <h2 className="section-heading">My name is</h2>
      <span className="about-me-name">Siddhant Tohan</span>
      <p className="about-me-header">
        I'm a{" "}
        <AnimatePresence exitBeforeEnter>
          <motion.span
            className="about-me-title"
            variants={titleVariants}
            transition="transition"
            initial="initial"
            animate="animate"
            exit="exit"
            key={titles[displayTitle]}
          >
            {titles[displayTitle]}
          </motion.span>
        </AnimatePresence>
      </p>
      {aboutMe.map((dat, i) => AboutMePara(dat, i))}
    </section>
  );
};
export default About;
