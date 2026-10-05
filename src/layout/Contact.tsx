import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";
import { Link } from "react-router";

const Contact = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 500,
    measureRef: lineRef,
  });

  return (
    <section id="contact" className="scroll-mt-10 relative z-300 text-white min-h-screen flex flex-col">
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

      {/* <Link to={}> */}
      <div className="text-center  flex my-10 w-[60%] grow m-auto">
        <Link
          to={"mailto:oluwashileshittu@gmail.com"}
          className=" py-10 h-fit bg-[#ff3d1f] text-white text-center rounded-full m-auto whitespace-nowrap cursor-pointer w-full lg:text-9xl md:text-7xl text-5xl"
        >
          LET'S TALK
        </Link>
      </div>
      {/* </Link> */}
    </section>
  );
};

export default Contact;
