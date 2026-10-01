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
    <section className="relative z-300 text-white min-h-screen flex flex-col">
      {/* Name of developer */}
      <div ref={nameRef} className="whitespace-nowrap w-full px-3 relative">
        <h1 ref={lineRef} className="whitespace-nowrap inline-block mt-5">
          Get in Touch
        </h1>
      </div>

      <div className=" w-full flex flex-row flex-nowrap justify-between gap-1 md:-mt-17 -mt-6 text-[11px]">
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
        <p>LET'S CHAT</p>
      </div>

      <div className="grow  text-center w-full flex">
        <button className="w-[60%] py-4 bg-[#ff3d1f] text-white text-center rounded-2xl m-auto h-full">
          Connect
        </button>
      </div>
    </section>
  );
};

export default Contact;
