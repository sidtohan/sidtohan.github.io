// Libs
import React from "react";
import { motion } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";

// Utils
import { primary } from "../Utils/colors";
import { popInVariants, fadeInRightVariants } from "../Utils/variantMaker";
import getIcon from "../Utils/iconMapper";
import { spring } from "../Utils/transitionMaker";

// Custom Hooks
import useAnimationTrigger from "../CustomHooks/useAnimationTrigger";
import useSectionTrigger from "../CustomHooks/useSectionTrigger";

const AchievementElement = ({ achievement, i }) => {
  const { ref, controls } = useAnimationTrigger({ threshold: 0.3 });
  return (
    <div
      className="achievement-element"
      ref={ref}
      style={{ gridRow: `${i + 1}/${i + 2}` }}
    >
      <motion.div
        className="achievement-element-logo-holder"
        variants={popInVariants}
        initial="initial"
        animate={controls}
        transition={spring(0, 150)}
      >
        {getIcon(achievement.logo, "#fff", "bxl")}
      </motion.div>
      <motion.p
        className="achievement-element-text"
        variants={fadeInRightVariants}
        initial="initial"
        animate={controls}
        transition={spring(2, 150)}
      >
        {achievement.achievement}
      </motion.p>
    </div>
  );
};

// Component
const Achievements = ({ achievements, setIfPrimary, setCurrent }) => {
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.5,
    bgColor: primary,
    sectionName: "Achievements"
  });
  return (
    <section className="achievements" ref={ref}>
      <SectionHeading text="I have achieved" />
      <div className="achievements-holder">
        <div
          className="achievements-holder-line"
          style={{ gridRow: `1/${achievements.length + 1}` }}
        ></div>
        {achievements.map((achievement, i) => (
          <AchievementElement
            key={achievement.achievement}
            achievement={achievement}
            i={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
