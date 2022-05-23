import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useAnimationTrigger = ({ threshold }) => {
  const [ref, inView] = useInView({ threshold });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useAnimationTrigger;
