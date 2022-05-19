// Returns a delay using a value
const delayMaker = (delay) => {
  return 0.3 * delay;
};

// Returns spring
export const spring = (delay) => {
  return {
    type: "spring",
    delay: delayMaker(delay),
    stiffness: 150,
  };
};

// Returns tween
export const tween = (delay) => {
  return {
    type: "tween",
    delay: delayMaker(delay),
  };
};
