// Libraries
import React from "react";
import { motion } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";

// Utils
import { fadeInLeftVariants, fadeInRightVariants } from "../Utils/variantMaker";
import { spring } from "../Utils/transitionMaker";
import { secondary } from "../Utils/colors";

// Custom Hooks
import useAnimationTrigger from "../CustomHooks/useAnimationTrigger";
import useSectionTrigger from "../CustomHooks/useSectionTrigger";

const ProjectElement = ({
  projectName,
  projectDesc,
  liveLink,
  repoLink,
  i,
}) => {
  const { ref, controls } = useAnimationTrigger({ threshold: 0.8 });
  return (
    <div className="project-element" ref={ref}>
      <motion.h3
        className="project-element-heading"
        variants={fadeInRightVariants}
        initial="initial"
        animate={controls}
        transition={spring(0, 150)}
      >
        A {projectName}
      </motion.h3>
      <motion.p
        className="project-element-text"
        variants={fadeInLeftVariants}
        initial="initial"
        animate={controls}
        transition={spring(2, 150)}
      >
        that {projectDesc}
      </motion.p>
      {liveLink ? (
        <motion.p
          className="project-element-live-link"
          variants={fadeInLeftVariants}
          initial="initial"
          animate={controls}
          transition={spring(3, 150)}
        >
          Try it{" "}
          <a href={liveLink} target="_blank" rel="noreferrer">
            here.
          </a>
        </motion.p>
      ) : null}
      <motion.p
        className="project-element-repo-link"
        variants={fadeInLeftVariants}
        initial="initial"
        animate={controls}
        transition={spring(4, 150)}
      >
        Check out the code{" "}
        <a href={repoLink} target="_blank" rel="noreferrer">
          here.
        </a>
      </motion.p>
    </div>
  );
};

const Projects = ({ projects, setIfPrimary, setCurrent }) => {
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.5,
    bgColor: secondary,
    sectionName: "Projects",
  });
  return (
    <section className="projects" ref={ref}>
      <SectionHeading text="I have worked on" />
      <div className="project-element-holder">
        {projects.map((project, i) => (
          <ProjectElement
            key={project.projectName}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            i={i + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
