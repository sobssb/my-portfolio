import { useRef } from "react";
import { Link } from "react-router";
import useElementSize from "../hooks/useElementSize";

const Footer = () => {
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 63,
    measureRef: lineRef,
  });

  const date = new Date().getFullYear();
  return (
    <footer className="relative z-300 text-white min-h-screen px-3">
      {/* Name of developer */}
      <section ref={nameRef} className="whitespace-nowrap w-full ">
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

      <section>
        <Link to="/">OLUWASHILESHITTU@GMAIL.COM </Link>
      </section>

      <section>
        <div>&copy;SOB {date}</div>
      </section>
      <div>
        <Link to="/">Linkedin</Link>
        <Link to="/">WhatsApp</Link>
        <Link to="/">09067233240</Link>
      </div>
    </footer>
  );
};

export default Footer;
