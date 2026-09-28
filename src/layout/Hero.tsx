import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Hero = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 230,
    measureRef: lineRef,
  });
  return (
    <section className="">
      <div ref={nameRef} className="whitespace-nowrap px-2 md:px-3">
        <h1 ref={lineRef} className="mt-1 inline-block w-max">
          SHITTU OLUWA<span className="text-[#ff3d1f]">SHILE</span>.B
        </h1>
      </div>
      <p>This will e the summary</p>
    </section>
  );
};

export default Hero;
