import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Contact = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });
  return (
    <section className="relative z-300 text-white min-h-screen">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3 relative">
        <h1 ref={lineRef} className="h1 whitespace-nowrap inline-block mt-5">
          Get in Touch
        </h1>
      </div>

      <div className=" w-full flex flex-row flex-nowrap justify-between gap-1 md:-mt-23 -mt-8 text-[11px]">
          <p>LET'S CHAT</p>
          <p>LET'S CHAT</p>
          <p>LET'S CHAT</p>
          <p>LET'S CHAT</p>
      </div>
    </section>
  );
};

export default Contact;
