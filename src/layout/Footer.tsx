import { useRef } from "react";
import { Link } from "react-router";
import useElementSize from "../hooks/useElementSize";

const Footer = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 90,
    measureRef: lineRef,
  });

  const date = new Date().getFullYear();
  return (
    <footer className="relative z-300 text-white min-h-screen px-3 flex flex-col items-start">
      {/* Name of developer */}
      <section ref={nameRef} className="whitespace-nowrap w-full flex flex-col items-start gap-19">
        <h1
          ref={lineRef}
          className="whitespace-nowrap inline-block  leading-18 md:mt-22 mt-22.5"
        >
          SHILE
        </h1>
        <h1
          ref={lineRef}
          className="whitespace-nowrap inline-block"
        >
          SHITTU
        </h1>
      </section>

      <section className="grow md:mt-[10%] mt-[20%]">
        <p>WORK</p>
        <p>SERVICES</p>
        <p>DIGITAL CRAFT</p>
        <p>ABOUT</p>
        <p>CONNECT</p>
        <p></p>
      </section>

      <section className="grow">
        <Link to="/">OLUWASHILESHITTU@GMAIL.COM </Link>
      </section>

      <section className="mb-8 flex flex-row justify-between items-center w-full gap-2">
        <div>&copy;SOB {date}</div>
      

      <div className="
      flex flex-row justify-between items-center gap-2">
        <Link to="/">Linkedin</Link>
        <Link to="/">WhatsApp</Link>
        <Link to="/">09067233240</Link>
      </div>
      </section>
    </footer>
  );
};

export default Footer;
