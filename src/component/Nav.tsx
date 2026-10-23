import { useState, useRef } from "react";
import logo from "../assets/logo.png";
// import { HashLink } from "react-router-hash-link";
import { TbMenu } from "react-icons/tb";
import { LiaTimesCircle } from "react-icons/lia";
import { NavLinkContent } from "../content/NavLinkContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { navList } = NavLinkContent();

  const navRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // const tl = gsap.timeline();

  useGSAP(
    () => {
      if (!navRef.current) return;
      // if (!textRef.current) return;

      gsap.from(navRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "linear",
        // staggers: true,
      });

      gsap.from(textRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "linear",
        // staggers: 0.1,
      });
    },
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      onClick={() => {
        if (!isMenuOpen) return;
        setIsMenuOpen(false);
      }}
      className=" fixed top-0 z-500 flex w-full flex-col items-start bg-black/50 px-3 py-3 backdrop-blur-md backdrop-saturate-140 md:py-3"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div
          ref={textRef}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link max-w-10 lg:mr-50 md:mr-40 mr-5"
        >
          <img src={logo} alt="logo image" aria-label="logo" />
        </div>
        <div className="md:grow">
          <div ref={textRef} className=" block md:hidden cursor-pointer">
            {isMenuOpen ? (
              <LiaTimesCircle
                className="text-[30px]"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <TbMenu
                className="text-[30px]"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          <div
            ref={textRef}
            className="link hidden md:flex md:flex-row gap-3 justify-between items-center"
          >
            {navList.map((list, i) => (
              <a
                key={i}
                className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-[15px] font-bold"
                href={list.navigate}
              >
                {list.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={textRef}
          className="text flex md:hidden flex-col  justify-between items-start mt-3"
        >
          {navList.map((list, i) => (
            <a
              key={i}
              className="relative after:absolute after:left-0 after:bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 text-[20px] font-bold"
              href={list.navigate}
            >
              {list.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
