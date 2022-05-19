// Returns a delay using a value
const delayMaker = (delay) => {
  return 0.3 * delay;
};

// Returns spring
export const spring = (delay, stiffness) => {
  return {
    type: "spring",
    delay: delayMaker(delay),
    stiffness,
  };
};

// Returns tween
export const tween = (delay) => {
  return {
    type: "tween",
    delay: delayMaker(delay),
  };
};
