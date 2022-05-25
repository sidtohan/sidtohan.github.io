// Libraries
import React, { useEffect, useState } from "react";
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

// Mobile Nav List
const MobileNavList = ({ sections, current, handleClick, navVisible }) => {
  return (
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
  );
};

// Desktop Nav List
const DesktopNavList = ({ sections, current, handleClick }) => {
  return (
    <nav className="header-nav">
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
    </nav>
  );
};

const Header = ({ name, sections, ifPrimary, current }) => {
  // if nav menu is visible
  const [navVisible, setNavVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // Desktop Width
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // if currently viewing desktop
  const ifDesktop = width >= 864;

  // represents if burger is cross
  const [burgerCross, setBurgerCross] = useState(false);
  const handleClick = (section) => {
    section = section.toLowerCase();
    const reqDiv = document.querySelector(`.${section}`);
    reqDiv.scrollIntoView({ behavior: "smooth" });
    setNavVisible(false);
    setBurgerCross(false);
  };

  return (
    <header>
      <h1 className="header-name">{name}</h1>
      <Burger
        setNavVisible={setNavVisible}
        navVisible={navVisible}
        burgerCross={burgerCross}
        setBurgerCross={setBurgerCross}
        ifPrimary={ifPrimary}
      />
      {ifDesktop ? (
        <DesktopNavList
          sections={sections}
          current={current}
          handleClick={handleClick}
        />
      ) : (
        <MobileNavList
          sections={sections}
          current={current}
          handleClick={handleClick}
          navVisible={navVisible}
        />
      )}
    </header>
  );
};

export default Header;
