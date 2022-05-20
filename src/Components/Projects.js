// Libraries
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utils
import {
  popInVariants,
  fadeInLeftVariants,
  popInLeftVariants,
} from "../Utils/variantMaker";
import { spring, tween } from "../Utils/transitionMaker";

const ProjectElement = ({
  projectName,
  projectDesc,
  liveLink,
  repoLink,
  i,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div className="project-element" ref={ref}>
      <motion.h3
        className="project-element-heading"
        variants={popInLeftVariants}
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
        transition={spring(1, 150)}
      >
        that {projectDesc}
      </motion.p>
      {liveLink ? (
        <motion.p
          className="project-element-live-link"
          variants={fadeInLeftVariants}
          initial="initial"
          animate={controls}
          transition={spring(2, 150)}
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
        transition={spring(3, 150)}
      >
        Check out the code{" "}
        <a href={repoLink} target="_blank" rel="noreferrer">
          here.
        </a>
      </motion.p>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <motion.h2
        className="section-heading"
        variants={popInVariants}
        initial="initial"
        animate="animate"
        transition={spring(1, 150)}
      >
        I have worked on
      </motion.h2>
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
