// Libs
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utils
import { burgerButtonVariants } from "../Utils/variantMaker";
import { tween } from "../Utils/transitionMaker";

// The Burger Button
const Burger = React.forwardRef(
  ({ setNavVisible, navVisible, burgerCross, setBurgerCross }, ref) => {
    const handleClick = () => {
      setNavVisible(!navVisible);
      setBurgerCross(!burgerCross);
    };
    // Make three Divs of equal length
    const initial = burgerCross ? "line" : "cross";
    const animate = burgerCross ? "cross" : "line";

    return (
      <div className="burger-button" onClick={handleClick}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="burger-button-line"
            variants={burgerButtonVariants}
            intial={initial}
            animate={animate}
            transition={tween(0)}
          ></motion.div>
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="burger-button-line"
            variants={burgerButtonVariants}
            intial={initial}
            animate={animate}
            transition={tween(0)}
          ></motion.div>
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="burger-button-line"
            variants={burgerButtonVariants}
            intial={initial}
            animate={animate}
            transition={tween(0)}
          ></motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

export default Burger;
