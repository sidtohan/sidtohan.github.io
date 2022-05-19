// Libraries
import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="project-element">
      <motion.h3
        className="project-element-heading"
        variants={popInLeftVariants}
        initial="initial"
        animate="animate"
        transition={spring(4 * i, 150)}
      >
        A {projectName}
      </motion.h3>
      <motion.p
        className="project-element-text"
        variants={fadeInLeftVariants}
        initial="initial"
        animate="animate"
        transition={spring(4 * i + 1, 150)}
      >
        that {projectDesc}
      </motion.p>
      {liveLink ? (
        <motion.p
          className="project-element-live-link"
          variants={popInLeftVariants}
          initial="initial"
          animate="animate"
          transition={spring(4 * i + 2, 150)}
        >
          Try it{" "}
          <a href={liveLink} target="_blank">
            here.
          </a>
        </motion.p>
      ) : null}
      <motion.p
        className="project-element-repo-link"
        variants={popInLeftVariants}
        initial="initial"
        animate="animate"
        transition={spring(4 * i + 3, 150)}
      >
        Check out the code{" "}
        <a href={repoLink} target="_blank">
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
