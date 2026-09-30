import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import background from "../assets/IMG-20260714-WA0004.jpg";
import image from "../assets/92e59c6cdbf5b944246f8595e7b5646b.jpg"

const Hero = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start z-100">
      {/* Name of developer */}
      <div
        ref={nameRef}
        className="whitespace-nowrap w-full px-3 relative z-100 py-0 my-0 mt-11 md:mt-5"
      >
        <h1 ref={lineRef} className="whitespace-nowrap inline-block">
          SHITTU OLUWA<span className="text-[#ff3d1f]">SHILE</span>.B 
        </h1>
      </div>

      {/* image of developer inform of icon */}
      <div className="w-50 mx-auto  relative z-20 -mt-25">
        <img className="h-fiit" src={image} alt="icon" />
      </div>

      {/* Short details about the developer */}
      <div className="flex  flex-col items-start justify-center w-full gap-3 md:mt-5 mt-3 relative z-10">
        <div className="md:max-w-150 md:ml-[20%] px-3 md:px-0 w-full mb-30">
          <h2 className="text-2xl">FRONT-END DEVELOPER // CRAFTING THE ENGINES OF DIGITAL COMMERCE & TECH SYSTEMS</h2>
          {/* <p className="">
            I build fast interactive interface with <span>React</span>,{" "}
            <span>GSAP</span> and <span>Lenis</span> turning static design into
            experences people remember. Currently open to freelance and
            full-time roles{" "}
          </p> */}
        </div>
        
      </div>

      {/* image background */}
      <div className="w-full absolute left-0 h-100px  -bottom-40  z-1">
        <img
          className="block h-100 w-full"
          src={background}
          alt="background"
          aria-label="background"
        />
      </div>
    </section>
  );
};

export default Hero;
