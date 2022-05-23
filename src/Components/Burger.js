// Libs
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utils
import { burgerButtonVariants } from "../Utils/variantMaker";
import { tween } from "../Utils/transitionMaker";
import { primary, secondary, fontColor } from "../Utils/colors";

// Burger Line
const BurgerLine = ({ lineColor, initial, animate }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="burger-button-line"
        variants={burgerButtonVariants}
        intial={initial}
        animate={animate}
        transition={tween(0)}
        style={{ backgroundColor: lineColor }}
      ></motion.div>
    </AnimatePresence>
  );
};

// The Burger Button
const Burger = ({
  setNavVisible,
  navVisible,
  burgerCross,
  setBurgerCross,
  ifPrimary,
}) => {
  const handleClick = () => {
    setNavVisible(!navVisible);
    setBurgerCross(!burgerCross);
  };
  // Make three Divs of equal length
  const initial = burgerCross ? "line" : "cross";
  const animate = burgerCross ? "cross" : "line";

  // if currently set to primary, bg color is primary
  const bgColor = ifPrimary ? primary : secondary;
  const lineColor = ifPrimary ? secondary : fontColor;

  return (
    <button
      className="burger-button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      key={ifPrimary}
    >
      {[1, 2, 3].map((val) => (
        <BurgerLine
          key={val}
          lineColor={lineColor}
          initial={initial}
          animate={animate}
        />
      ))}
    </button>
  );
};
export default Burger;
