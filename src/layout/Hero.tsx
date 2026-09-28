import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import background from "../assets/IMG-20260714-WA0004.jpg";
import image from "../assets/pngwing.com (1) (2).png";

const Hero = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });
  return (
    <section className="relative min-h-[calc(100vh-26.781px)]">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap px-2 md:px-3">
        <h1 ref={lineRef} className="inline-block w-max">
          SHITTU OLUWA<span className="text-[#ff3d1f]">SHILE</span>.B
        </h1>
      </div>
      {/* image of developer inform of icon */}
      <div className="absolute left-1/2 top-1/2 -translate-1/2 z-30 md:max-w-100">
        <img className="md:max-width-[100px]" src={image} alt="icon" />
      </div>
      {/* Short details about the developer */}
      <div className="absolute md:px-3 md:bottom-20 bottom-20 md:w-125 z-50 ">
        <h2 className="text-3xl">FRONT-END DEVELOPER</h2>
        <p className="text-2xl">
          I build fast interactive interface with <span>React</span>,{" "}
          <span>GSAP</span> and <span>Lenis</span> turning static design into
          experences people remember. Currently open to freelance and full-time
          roles{" "}
        </p>
      </div>
      \{/* call to action */}
      <div className="md:absolute md:px-3 md:bottom-40 md:w-125 z-50 right-0 text-right flex flex-col items-center justify-end gap-2">
        <button className="bg-[#6b0f0f] px-2 py-1 w-50 rounded-2xl">
          Download CV
        </button>
        <button className="bg-[#6b0f0f] px-2 py-1 w-50 rounded-2xl">
          Contanct{" "}
        </button>
      </div>
      {/* image background */}
      <div className="w-full absolute bottom-5 h-80">
        <img
          className="block w-full"
          src={background}
          alt="background"
          aria-label="background"
        />
      </div>
    </section>
  );
};

export default Hero;
