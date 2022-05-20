// Libs
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utils
import { popInVariants, fadeInRightVariants } from "../Utils/variantMaker";
import getIcon from "../Utils/iconMapper";
import { spring, tween } from "../Utils/transitionMaker";

const AchievementElement = ({ achievement }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div className="achievement-element" ref={ref}>
      <motion.div
        className="achievement-element-logo-holder"
        variants={popInVariants}
        initial="initial"
        animate={controls}
        transition={spring(0, 150)}
      >
        {getIcon(achievement.logo, "#fff", "achievement")}
      </motion.div>
      <motion.p
        className="achievement-element-text"
        variants={fadeInRightVariants}
        initial="initial"
        animate={controls}
        transition={tween(1)}
      >
        {achievement.achievement}
      </motion.p>
    </div>
  );
};
// Component
const Achievements = ({ achievements }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <section className="achievements">
      <motion.h2
        className="section-heading"
        ref={ref}
        variants={popInVariants}
        initial="initial"
        animate={controls}
      >
        I have achieved
      </motion.h2>
      <div className="achievements-holder">
        {achievements.map((achievement) => (
          <AchievementElement
            key={achievement.achievement}
            achievement={achievement}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
