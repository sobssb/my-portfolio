import { useRef } from "react";
import useElementSize from "../hooks/useElementSize";

const Footer = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 63,
    measureRef: lineRef,
  });
  return (
    <footer className="relative z-300 text-white">
      {/* Name of developer */}
      <section ref={nameRef} className="whitespace-nowrap w-full px-3">
        <h1
          ref={lineRef}
          className="whitespace-nowrap inline-block mt-5 leading-13"
        >
          SHITTU <br /> OLUWASHILE
        </h1>
      </section>
      
      <section>
        <p>WORK</p>
        <p>SERVICES</p>
        <p>ABOUT</p>
        <p>CONNECT</p>
        <p></p>
      </section>
    </footer>
  );
};

export default Footer;
