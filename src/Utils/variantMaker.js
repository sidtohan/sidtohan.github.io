// Slide In Top Down
export const slideInTopDownVariants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 30,
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