import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Loader component import karein
import "./Home.css"; // CSS file for Home

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Frontend Designer",
  "Web Designer",
  "Full Stack Developer",
];

const Home = () => {
  const [loading, setLoading] = useState(true); // Loader state
  const [displayedText, setDisplayedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Handle loader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentText = roles[currentRole];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, typingSpeed, currentRole]);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  // Main Home content after loader
  return (
    <div>
      <section
        className="home min-h-screen flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between lg:min-h-screen py-10"
        id="home"
      >
        <div className="home-content text-center lg:text-left px-6 lg:px-20 space-y-8">
          <div className="text-center space-y-4">
            {/* First Line */}
            <h1 className="text-2xl sm:text-3x1 lg:text-5x1 font-bold mt-4 leading-snug">
              {Array.from("Hi, It's me").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transition-transform duration-200 ease-in-out text-white hover:animate-bounce"
                  style={{
                    color: "inherit", // Default text color
                    cursor: "pointer",
                  }}
                  onMouseEnter={
                    (e) => (e.target.style.color = "var(--main-color)") // Hover color
                  }
                  onMouseLeave={(e) => (e.target.style.color = "inherit")} // Reset color
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mt-2 leading-snug">
              {Array.from("Deepanshi").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-transform duration-300 ease-in-out ${
                    letter === "D" ? "text-main-color" : "text-white"
                  }`}
                  style={{
                    color: letter === "D" ? "var(--main-color)" : "white",
                    cursor: "pointer",
                    animation: `slideIn 0.5s ease-in-out forwards`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                  onMouseEnter={(e) => {
                    if (letter !== "D") {
                      e.target.style.color = "var(--main-color)";
                      e.target.style.transform = "translateY(-5px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (letter !== "D") {
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(0px)";
                    }
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl opacity-0 animate-slide-top mt-6">
            And I'm a{" "}
            <span className="text-main-color font-bold animate-pulse">
              {displayedText}
            </span>
          </h3>

          <div className="social-icons flex  justify-center lg:justify-start gap-0 mb-1">
            <a
              href="https://www.linkedin.com/in/deepanshirajput-webdev"
              className="text-xl sm:text-2xl hover:text-main-color"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://Github.com/Deepanshirajput121 "
              className="text-xl sm:text-2xl hover:text-main-color"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="mailto:deepanshirajput68@gmail.com"
              className="text-xl sm:text-2xl hover:text-main-color"
            >
              <i className="bx bxs-envelope"></i>
            </a>
            <a
              href="tel:+919560726578"
              className="text-xl sm:text-2xl hover:text-main-color"
            >
              <i className="bx bxs-phone"></i>
            </a>
          </div>

          <div className="btn-container ml-">
            <a
              href="/contact"
              className="btn inline-block bg-main-color text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        <div className="home-img mt-6 lg:mt-40 flex justify-center">
          <video
            src="/videos/video2.mp4"
            title="Deepanshi Animation"
            className="w-[85vw] sm:w-[60vw] lg:w-[30vw] rounded-full transition-all duration-400 ease-in-out cursor-pointer object-cover"
            autoPlay
            loop
            muted
            style={{ transform: "scale(1.05)" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Home;
