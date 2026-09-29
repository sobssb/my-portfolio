
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="px-3 py-2 flex items-center justify-between fixed top-0 nav z-500 w-full">
      <div className="max-w-10 lg:mr-50 md:mr-40 mr-5">
        <img src={logo} alt="logo image" arial-label:string="logo" />
      </div>
      <div className="md:grow">
        <div className="block md:hidden">
          <p>--</p>
          <p className="-mt-4">--</p>
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
