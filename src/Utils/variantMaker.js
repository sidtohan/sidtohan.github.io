import { primary, secondary } from "./colors";

// Slide In Top Down
export const slideInTopDownVariants = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "+100%",
    opacity: 0,
  },
};

// Fade in Left
export const fadeInLeftVariants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

// Fade In Top
export const fadeInTopVariants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

// Fade in Right
export const fadeInRightVariants = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

// Pop In Variants
export const popInVariants = {
  initial: {
    scale: 0,
    transformOrigin: "center",
  },
  animate: {
    scale: 1,
    transformOrigin: "center",
  },
  exit: {
    scale: 0,
    transformOrigin: "center",
  },
};
// Pop In Variant Left Origin
export const popInLeftVariants = {
  initial: {
    scale: 0,
    transformOrigin: "left",
  },
  animate: {
    scale: 1,
    transformOrigin: "left",
  },
};

// Expand Up
export const expandUpVariants = {
  initial: {
    scaleY: 0,
    transformOrigin: "bottom center",
  },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom center",
  },
  exit: {
    scaleY: 0,
    transformOrigin: "bottom center",
  },
};

// Burger Variants
export const burgerButtonVariants = {
  line: {
    rotateZ: 0,
  },
  cross: {
    rotateZ: -45,
  },
};

// Color Transition
export const colorBurgerTransitionVariants = {
  primary: {
    backgroundColor: primary,
  },
  secondary: {
    backgroundColor: secondary,
  },
};
