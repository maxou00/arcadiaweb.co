import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

export function useNavbarScrollAnimation() {
  const [lastScrollPercent, setLastScrollPercent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [trackingRef, inView, entry] = useInView({
    initialInView: true,
    threshold: 0.1,
  });

  useEffect(() => {

    const scrollEventlistener = (ev: Event) => {
      let body = document.querySelector("body");
      let scrollPercent = parseFloat(
        (window.scrollY / body!.scrollHeight).toFixed(2)
      );
      if (scrollPercent === lastScrollPercent) {
        return;
      }
      if (scrollPercent > lastScrollPercent) {
        setDirection(1);
      } else if (scrollPercent < lastScrollPercent) {
        setDirection(-1);
      }
      setLastScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", scrollEventlistener);

    return () => {
      window.removeEventListener("scroll", scrollEventlistener);
    };
  }, [lastScrollPercent]);

  const shouldFix = useMemo(() => {
    return (
      !inView &&
      lastScrollPercent > 0.01 &&
      lastScrollPercent <= 1 &&
      direction < 0
    );
  }, [direction, inView, lastScrollPercent]);

  return {
    trackingRef,
    inView,
    entry,
    shouldFix,
    direction,
    lastScrollPercent,
  };
}
