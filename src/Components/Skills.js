// Lib
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";

// Utils
import getIcon from "../Utils/iconMapper";
import { tween } from "../Utils/transitionMaker";
import { expandUpVariants, fadeInTopVariants } from "../Utils/variantMaker";
import { primary, secondary } from "../Utils/colors";

// Hooks
import useAnimationTrigger from "../CustomHooks/useAnimationTrigger";
import useSectionTrigger from "../CustomHooks/useSectionTrigger";

const SkillElement = ({ skill, i }) => {
  const { ref, controls } = useAnimationTrigger({ threshold: 0.3 });

  const [hovering, hover] = useState(false);
  const style = hovering
    ? {
        color: primary,
      }
    : null;
  const color = hovering ? primary : secondary;
  return (
    <motion.div
      ref={ref}
      className="skill-element"
      onMouseEnter={() => hover(true)}
      onMouseLeave={() => hover(false)}
      style={style}
      variants={fadeInTopVariants}
      initial="initial"
      animate={controls}
      transition={tween(0)}
    >
      {getIcon(skill, color, "bxl")}
      <p className="skill-element-text">{skill}</p>
      <AnimatePresence exitBeforeEnter>
        {hovering ? (
          <motion.div
            className="skill-element-bg"
            variants={expandUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={tween(0)}
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

// Skills Section
const Skills = ({ skills, setIfPrimary, setCurrent }) => {
  // Skills is list of skills
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.5,
    bgColor: primary,
    sectionName: "Skills",
  });

  return (
    <section className="skills" ref={ref}>
      <SectionHeading text="I am skilled in" />
      <div className="skill-elements">
        {skills.map((skill, i) => (
          <SkillElement key={skill} skill={skill} i={i} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
