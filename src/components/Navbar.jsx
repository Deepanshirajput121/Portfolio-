import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiPlayListAddLine } from "react-icons/ri";
import "./Home.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Window resize event for responsive navbar
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width > 1027);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full px-8 sm:px-[5%] py-6 bg-black bg-opacity-30 backdrop-blur-lg flex justify-between items-center z-50">
      {/* Logo */}
      <a href="/home" className="logo flex items-center gap-2 text-2xl font-bold tracking-wide">
        <div className="rounded-full bg-main-color text-white w-10 h-10 flex items-center justify-center text-xl">
          D
        </div>
        <span style={{ color: "white", letterSpacing: "0.1em" }}>Deepanshi</span>
      </a>

      {/* Menu Icon for Mobile (Small Screens) */}
      {!isLargeScreen && (
        <div className="block lg:hidden">
          <RiPlayListAddLine
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}

      {/* Navbar Links for Large Screens */}
      {isLargeScreen && (
        <nav className="hidden lg:flex lg:items-center lg:justify-end space-x-8">
          <Link to="/" className="text-white block py-2 lg:py-0 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="text-white block py-2 lg:py-0 transition duration-200">
            About Me
          </Link>
          <Link to="/projects" className="text-white block py-2 lg:py-0 transition duration-200">
            Projects
          </Link>
          <Link to="/skills" className="text-white block py-2 lg:py-0 transition duration-200">
            Skills
          </Link>
          <Link to="/contact" className="text-white block py-2 lg:py-0 transition duration-200">
            Contact
          </Link>
        </nav>
      )}

      {/* Navbar Links for Small Screens (When Menu is Open) */}
      {!isLargeScreen && (
        <nav
          className={`absolute top-[60px] left-0 w-full bg-black transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className="text-white block py-4 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block py-4 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-white block py-4 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="text-white block py-4 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-white block py-4 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
