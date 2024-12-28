import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiPlayListAddLine } from "react-icons/ri"; // Correct icon import
import "./Home.css"; // Aap apni CSS file ka use karenge

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // New state for large screen check

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Menu ko open/close karne ka function
  };

  // Window resize ke liye event
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width > 1027); // Set state based on screen width
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <span style={{ color: "white", letterSpacing: "0.1em" }}>
          Deepanshi
        </span>
      </a>

      {/* Menu Icon for Mobile - For small screen */}
      {!isLargeScreen && (
        <div className="block lg:hidden">
          <RiPlayListAddLine
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu} // On click of the icon, show/hide menu
          />
        </div>
      )}

      {/* Navbar Links - For large screens */}
      {isLargeScreen && (
        <nav className="hidden lg:flex lg:items-center lg:justify-end space-x-8">
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
            to="/Projects"
            className="text-white block py-2 lg:py-0 hover: transition duration-200"
          >
            Projects
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
      )}

      {/* Navbar Links for small screen when menu is open */}
      {!isLargeScreen && (
        <nav
          className={`navbar absolute top-0 left-0 w-full bg-black lg:bg-transparent transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{
            height: isMenuOpen ? "auto" : "0", // Slide effect ke liye height change
            overflow: "hidden", // Jisse menu properly slide ho
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <Link
              to="/"
              className="text-white block py-4 hover: transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close the menu after clicking the link
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block py-4 hover: transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu
            >
              About Me
            </Link>
            <Link
              to="/skills"
              className="text-white block py-4 hover: transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-white block py-4 hover: transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu
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
