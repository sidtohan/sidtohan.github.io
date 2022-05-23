// Libraries
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Burger button
import Burger from "./Burger";

// Utils
import { tween } from "../Utils/transitionMaker";
import { slideInTopDownVariants } from "../Utils/variantMaker";
import { primary } from "../Utils/colors";

const NavElement = ({ handleClick, section, current }) => {
  // now comes the style part
  const style =
    section.toLowerCase() === current.toLowerCase()
      ? {
          color: primary,
        }
      : null;
  return (
    <li
      style={style}
      key={section}
      className="header-nav-option"
      onClick={() => handleClick(section)}
    >
      {section}
    </li>
  );
};
const Header = ({ name, sections, ifPrimary, current }) => {
  // if nav menu is visible
  const [navVisible, setNavVisible] = useState(false);
  // represents if burger is cross
  const [burgerCross, setBurgerCross] = useState(false);
  const handleClick = (section) => {
    section = section.toLowerCase();
    if (section === "home") section = "welcome";
    const reqDiv = document.querySelector(`.${section}`);
    reqDiv.scrollIntoView({ behavior: "smooth" });
    setNavVisible(false);
    setBurgerCross(false);
  };

  return (
    <header>
      <Burger
        setNavVisible={setNavVisible}
        navVisible={navVisible}
        burgerCross={burgerCross}
        setBurgerCross={setBurgerCross}
        ifPrimary={ifPrimary}
      />
      <h1 className="header-name">{name}</h1>
      <AnimatePresence>
        {navVisible ? (
          <motion.nav
            className="header-nav"
            variants={slideInTopDownVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={tween(0)}
          >
            <ul>
              {sections.map((section) => (
                <NavElement
                  key={section}
                  section={section}
                  handleClick={handleClick}
                  current={current}
                />
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
