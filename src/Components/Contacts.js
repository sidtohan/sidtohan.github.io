// Libs
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utils
import getIcon from "../Utils/iconMapper";
import { secondary, fontColor } from "../Utils/colors";
import { fadeInTopVariants, popInVariants } from "../Utils/variantMaker";
import { tween } from "../Utils/transitionMaker";

const ContactElement = ({ contact }) => {
  const [ref, inView] = useInView({ threshold: 0.9 });
  const controls = useAnimation();

  const [hovering, hover] = useState(false);
  // Some styling
  const color = hovering ? secondary : fontColor;
  const iconFam = contact.name === "Email" ? "dashicons" : "simple-icons";

  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView, controls]);

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
const Contact = ({ contacts }) => {
  return (
    <section className="contacts">
      <h2 className="section-heading">Contact me through</h2>
      <div className="contact-elements-holder">
        {contacts.map((contact) => (
          <ContactElement contact={contact} key={contact.name} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
