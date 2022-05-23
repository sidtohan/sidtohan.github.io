// Libs
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import SectionHeading from "./SectionHeading";

// Utils
import getIcon from "../Utils/iconMapper";
import { secondary, fontColor } from "../Utils/colors";
import { fadeInTopVariants, popInVariants } from "../Utils/variantMaker";
import { tween } from "../Utils/transitionMaker";

// Custom Hooks
import useAnimationTrigger from "../CustomHooks/useAnimationTrigger";
import useSectionTrigger from "../CustomHooks/useSectionTrigger";

const ContactElement = ({ contact }) => {
  const { ref, controls } = useAnimationTrigger({ threshold: 0.3 });

  const [hovering, hover] = useState(false);
  // Some styling
  const color = hovering ? secondary : fontColor;
  const iconFam = contact.name === "Email" ? "dashicons" : "simple-icons";
  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noreferrer"
      className="contact-element"
      style={{
        color,
      }}
      onMouseEnter={() => hover(true)}
      onMouseLeave={() => hover(false)}
      ref={ref}
      variants={fadeInTopVariants}
      initial="initial"
      animate={controls}
      transition={tween(0)}
    >
      {getIcon(contact.name, color, iconFam)}
      <p className="contact-element-text">{contact.name}</p>
      <AnimatePresence exitBeforeEnter>
        {hovering ? (
          <motion.div
            className="contact-element-bg"
            variants={popInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={tween(0)}
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </motion.a>
  );
};
const Contact = ({ contacts, setIfPrimary, setCurrent }) => {
  const ref = useSectionTrigger({
    setIfPrimary,
    setCurrent,
    threshold: 0.8,
    bgColor: secondary,
    sectionName: "Contacts",
  });

  return (
    <section className="contacts" ref={ref}>
      <SectionHeading text="Contact me through" />
      <div className="contact-elements-holder">
        {contacts.map((contact) => (
          <ContactElement contact={contact} key={contact.name} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
