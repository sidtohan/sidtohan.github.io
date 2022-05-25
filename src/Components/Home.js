import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";
import SpinCoin from "./SpinCoin";

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

const InfoPara = (dat, i) => {
  return (
    <motion.p
      className="home-para"
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

const Home = ({ aboutMe, name, setIfPrimary, setCurrent, pic }) => {
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.5,
    bgColor: secondary,
    sectionName: "Home",
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
    <section className="home" ref={ref}>
      <SpinCoin pic={pic} />
      <SectionHeading text="My name is" />
      <motion.span
        className="home-name"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(2, 150)}
      >
        {name}
      </motion.span>
      <p>
        <motion.p
          className="home-header"
          variants={fadeInLeftVariants}
          initial="initial"
          animate="animate"
          transition={spring(3, 150)}
        >
          I'm a{" "}
          <AnimatePresence exitBeforeEnter>
            <motion.span
              className="home-title"
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
        {aboutMe.map((dat, i) => InfoPara(dat, i))}
      </p>
    </section>
  );
};
export default Home;
