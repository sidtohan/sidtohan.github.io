import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { secondary } from "../Utils/colors";

const useSectionTrigger = ({
  setIfPrimary,
  threshold,
  bgColor,
  setCurrent,
  sectionName,
}) => {
  const [ref, inView] = useInView({ threshold });
  const boolVal = bgColor === secondary ? true : false;
  useEffect(() => {
    if (inView) {
      setIfPrimary(boolVal);
      setCurrent(sectionName);
    }
  }, [boolVal, sectionName, inView, setCurrent, setIfPrimary]);

  return ref;
};

export default useSectionTrigger;
