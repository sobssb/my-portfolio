import { useRef } from "react";
import { Link } from "react-router";
import { NavLinkContent } from "../content/NavLinkContent";
import useElementSize from "../hooks/useElementSize";

const Footer = () => {
  const { navList } = NavLinkContent();
  const lineRef = useRef(null);

  const nameRef = useElementSize<HTMLDivElement>({
    minSize: 24,
    maxSize: 90,
    measureRef: lineRef,
  });

  const date = new Date().getFullYear();
  return (
    <footer className="relative z-300 text-white px-3 flex flex-col items-start border-t-[0.1px] border-[rgba(243,237,227,0.1)]">
      {/* Name of developer */}
      <section
        ref={nameRef}
        className="whitespace-nowrap w-full flex flex-col items-start gap-2"
      >
        <h1
          ref={lineRef}
          className="whitespace-nowrap inline-block  leading-0 md:mt-22 mt-22.5"
        >
          SHILE
        </h1>
        <h1 ref={lineRef} className="whitespace-nowrap inline-block -mt-6">
          SHITTU
        </h1>
      </section>

      <section className="grow md:mt-[10%] mt-20">
        <div className="flex flex-col  items-start mt-3">
          {navList.map((list, i) => (
            <a
              key={i}
              className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              href={list.navigate}
            >
              {list.text}
            </a>
          ))}
        </div>
      </section>

      <section className="grow mt-20">
        <Link
          to={"mailto:oluwashileshittu@gmail.com"}
          className="relative after:absolute after:left-0 after:-bottom-2 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
        >
          OLUWASHILESHITTU@GMAIL.COM{" "}
        </Link>
      </section>

      <section className="mb-8 flex flex-row justify-between items-center w-full gap-2 mt-20">
        <div>&copy;SOB {date}</div>

        <div
          className="
      flex flex-row justify-between items-center gap-2"
        >
          <Link
            className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            to="/"
          >
            Linkedin
          </Link>
          <a
            className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            href="https://wa.me/2349067233240"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            href="tel:+2349067233240"
          >
            09067233240
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
