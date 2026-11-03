import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import background from "../assets/IMG-20260714-WA0004.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const lineRef = useRef(null);
  const container = useRef<HTMLDivElement>(undefined as any);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });
  const shortRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: "power4",
          duration: 1,
          stagger: 0.05,
        },
      });
      if (!lineRef.current) return;

      SplitText.create(lineRef.current, {
        type: "chars",
        autoSplit: true,
        onSplit: (self) => {
          return tl.from(self.chars, {
            y: 10,
            opacity: 0,
            // delay: 1.5,
            // duration: 1,
            // stagger: 0.05,
            ease: "power4",
          });
        },
      });
      tl.from(".background", {
        yPercent: 100,
        // delay: 2.3,
        // duration: 1,
        // opacity: 0,
      });

      SplitText.create(shortRef.current, {
        type: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return tl.from(self.lines, {
            y: 50,
            // opacity: 0,
            // delay: 2,
            // duration: 1,
            // stagger: 0.05,
            ease: "power4",
          });
        },
      });

      // return () => split.revert();
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-start justify-start z-100"
    >
      {/* Name of developer */}
      <div
        ref={nameRef}
        className="whitespace-nowrap w-full px-3 relative z-100 py-0 my-0 mt-12 md:mt-5"
      >
        <h1 ref={lineRef} className="whitespace-nowrap inline-block">
          SHITTU OLUWA<span className="text-[#ff3d1f]">SHILE</span>.B
        </h1>
      </div>

      {/* image of developer inform of icon */}
      {/* <div className="w-55 m-auto  relative z-20">
        <img src={image} alt="icon" />
      </div> */}

      {/* Short details about the developer */}
      <div className="grow flex flex-col justify-center w-full gap-3 mt-5 relative z-10">
        <div className="md:max-w-150 md:ml-[20%] px-3 md:px-0 w-full translate-y-4">
          <h2 ref={shortRef} className="text-[24px] font-bold">
            Front-End <span className="span text-[whitesmoke]">Developer</span>{" "}
            // Building Responsive Interface
            <span className="span text-[whitesmoke]"> Web</span> Experiences
          </h2>
        </div>
      </div>

      {/* image background */}
      <div className="w-full absolute left-0 -bottom-50  z-1 background">
        <img
          className="block h-[70vh] w-full"
          src={background}
          alt="background"
          aria-label="background"
        />
      </div>
    </section>
  );
};

export default Hero;
