import {useState} from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import {TbMenu} from "react-icons/tb";
import { LiaTimesCircle } from "react-icons/lia";

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="px-3 py-2 flex items-center justify-between fixed top-0 nav z-500 w-full md:mb-6 mb-4">
      <div className="max-w-10 lg:mr-50 md:mr-40 mr-5">
        <img src={logo} alt="logo image" arial-label:string="logo" />
      </div>
      <div className="md:grow">
        <div className="block md:hidden cursor-pointer">
          {isMenuOpen ? (
            <LiaTimesCircle onClick={() => setIsMenuOpen(false)} />
          ) : (
            <TbMenu onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
        <div className="hidden md:flex md:flex-row gap-3 justify-between items-center">
          <Link className="hover:text-[#ff3d1f]" to="/">WORK</Link>
          <Link className="hover:text-[#ff3d1f]" to="/">SERVICES</Link>
          <Link className="hover:text-[#ff3d1f]" to="/">ABOUT</Link>
          <Link className="hover:text-[#ff3d1f]" to="/">CONNECT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
