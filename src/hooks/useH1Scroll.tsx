import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export const useH1Scroll = (
  container: React.RefObject<HTMLDivElement>,
  lineRef: React.RefObject<null>,
) => {
  useGSAP(
    () => {
      if (!lineRef.current) return;

      SplitText.create(lineRef.current, {
        type: "chars",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            scrollTrigger: {
              trigger: lineRef.current,
              start: "bottom 90%",
              end: "bottom 40%",
              // markers: true,
              scrub: true,
            },
            y: 10,
            opacity: 0,
            // delay: 1.5,
            // duration: 1,
            stagger: 0.05,
            ease: "power4",
          });
        },
      });
    },
    { scope: container },
  );
};
