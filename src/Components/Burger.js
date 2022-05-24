// Libs
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utils
import { burgerButtonVariants } from "../Utils/variantMaker";
import { colorBurgerTransitionVariants } from "../Utils/variantMaker";
import { tween } from "../Utils/transitionMaker";
import { secondary, fontColor } from "../Utils/colors";

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

  // store the variants
  const initVariant = ifPrimary ? "secondary" : "primary";
  const animateVariant = ifPrimary ? "primary" : "secondary";

  const lineColor = ifPrimary ? secondary : fontColor;
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        className="burger-button"
        onClick={handleClick}
        key={ifPrimary}
        variants={colorBurgerTransitionVariants}
        initial={initVariant}
        animate={animateVariant}
      >
        {[1, 2, 3].map((val) => (
          <BurgerLine
            key={val}
            lineColor={lineColor}
            initial={initial}
            animate={animate}
          />
        ))}
      </motion.button>
    </AnimatePresence>
  );
};
export default Burger;
