// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white py-8">
      <div className="social flex justify-center space-x-6 mb-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--i": 7 }}
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--i": 8 }}
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--i": 9 }}
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--i": 10 }}
        >
          <i className="bx bxl-twitter"></i>
        </a>
      </div>

      <ul className="list flex justify-center space-x-4 mb-4">
        <li>
          <a href="#" className="hover:text-main-color">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-main-color">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-main-color">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-main-color">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-main-color">
            Testimonials
          </a>
        </li>
      </ul>

      <p className="copyright text-center">
        &copy; {new Date().getFullYear()} Deepanshi Rajput | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
