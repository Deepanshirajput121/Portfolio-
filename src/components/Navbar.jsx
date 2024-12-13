import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // In your render
  <i
    className="bx bx-menu text-white text-3xl"
    onClick={toggleMenu}
    id="menu-icon"
  ></i>;

  return (
    <header className="fixed top-0 left-0 w-full px-8 sm:px-[5%] py-6 bg-black bg-opacity-30 backdrop-blur-lg flex justify-between items-center z-50">
      {/* Logo */}
      <a
        href="/home"
        className="logo flex items-center gap-2 text-2xl font-bold tracking-wide"
      >
        {/* Circular Icon for "D" */}
        <div
          className="rounded-full bg-main-color text-white w-10 h-10 flex items-center justify-center text-xl"
          style={{ backgroundColor: "var(--main-color)" }}
        >
          D
        </div>
        {/* Text for "eepanshi" */}
        <span style={{ color: "white", letterSpacing: "0.1em" }}>Deepanshi</span>
      </a>

      {/* Menu Icon for Mobile */}
      <div className="block lg:hidden">
        <i
          className="bx bx-menu text-white text-3xl cursor-pointer"
          id="menu-icon"
          onClick={toggleMenu}
        ></i>
      </div>

      {/* Navbar Links */}
      <nav
        className={`navbar lg:flex lg:items-center lg:justify-end space-x-8 absolute lg:relative top-20 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } lg:block p-5 lg:p-0`}
      >
        <Link
          to="/"
          className="text-white block py-2 lg:py-0 hover: transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white block py-2 lg:py-0 hover: transition duration-200"
        >
          About Me
        </Link>
        <Link
          to="/skills"
          className="text-white block py-2 lg:py-0 hover: transition duration-200"
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="text-white block py-2 lg:py-0 hover: transition duration-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
