import { useEffect, useState } from "react";
import cx from "classnames";

export const useScrollAnimation = (ref, elementClass, animationClass) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementVisible =
        rect.top <= windowHeight && rect.bottom >= 0;

      if (elementVisible && !animated) {
        // Play animation only if not animated before
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated, ref]);

  return cx(elementClass, { [animationClass]: animated });
};
