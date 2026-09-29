import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Services = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section className="relative z-300 text-white">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Services
        </h1>
      </div>
    </section>
  );
};

export default Services;
