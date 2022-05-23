import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { primary, secondary } from "../Utils/colors";

const useSectionTrigger = ({ setIfPrimary, threshold, bgColor }) => {
  const [ref, inView] = useInView({ threshold });
  const boolVal = bgColor === secondary ? true : false;
  useEffect(() => {
    if (inView) {
      setIfPrimary(boolVal);
    }
  }, [inView]);

  return ref;
};

export default useSectionTrigger;
