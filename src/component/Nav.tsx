import { useState } from "react";
import logo from "../assets/logo.png";
// import { HashLink } from "react-router-hash-link";
import { TbMenu } from "react-icons/tb";
import { LiaTimesCircle } from "react-icons/lia";
import { NavLinkContent } from "../content/NavLinkContent";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { navList } = NavLinkContent();

  return (
    <nav
      onClick={() => {
        if (!isMenuOpen) return;
        setIsMenuOpen(false);
      }}
      className="px-3 py-3 md:py-3 flex flex-col items-start fixed top-0 nav z-500 w-full"
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="max-w-10 lg:mr-50 md:mr-40 mr-5"
        >
          <img src={logo} alt="logo image" aria-label="logo" />
        </div>
        <div className="md:grow">
          <div className="block md:hidden cursor-pointer">
            {isMenuOpen ? (
              <LiaTimesCircle
                className="text-[20px]"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <TbMenu
                className="text-[20px]"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          <div className="hidden md:flex md:flex-row gap-3 justify-between items-center">
            {navList.map((list, i) => (
              <a
                key={i}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                href={list.navigate}
              >
                {list.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex md:hidden flex-col gap-3 justify-between items-start mt-3">
          {navList.map((list, i) => (
            <a
              key={i}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[.5px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
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
