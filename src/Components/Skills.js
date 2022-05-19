// Lib
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Utils
import getIcon from "../Utils/iconMapper";
import { spring, tween } from "../Utils/transitionMaker";
import {
  popInVariants,
  expandUpVariants,
  fadeInTopVariants,
} from "../Utils/variantMaker";

const SkillElement = ({ skill, i }) => {
  const [hovering, hover] = useState(false);
  const style = hovering
    ? {
        color: `#f44d4d`,
      }
    : null;
  const color = hovering ? "#f44d4d" : "#121226";
  return (
    <motion.div
      className="skill-element"
      onMouseEnter={() => hover(true)}
      onMouseLeave={() => hover(false)}
      style={style}
      variants={fadeInTopVariants}
      initial="initial"
      animate="animate"
      transition={tween(i + 2)}
    >
      {getIcon(skill, color)}
      <p className="skill-element-text">{skill}</p>
      <AnimatePresence>
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
const Skills = ({ skills }) => {
  // Skills is list of skills
  return (
    <section className="skills">
      <motion.h2
        className="section-heading"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(1, 150)}
      >
        I am skilled in
      </motion.h2>
      <div className="skill-elements">
        {skills.map((skill, i) => (
          <SkillElement key={skill} skill={skill} i={i} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
