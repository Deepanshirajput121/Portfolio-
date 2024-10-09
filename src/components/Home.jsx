import React, { useEffect, useState } from "react";
import "./Home.css"; // Assuming your CSS file is linked

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Frontend Designer",
  "Web Designer",
  "Full Stack Developer",
];

const Home = () => {
  const [displayedText, setDisplayedText] = useState(""); 
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

  return (
    <div>
      <section className="home min-h-screen flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between lg:min-h-screen" id="home">
        <div className="home-content text-center lg:text-left px-6 lg:px-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4 leading-none opacity-0 animate-slide-right">
            Hi, It's me <span>Deepanshi</span>
          </h1>
          <h3 className="text-xl sm:text-2xl lg:text-3xl my-3 opacity-0 animate-slide-top">
            And I'm a{" "}
            <span className="text-main-color font-bold animate-pulse">
              {displayedText}
            </span>
          </h3>
          <p className="text-xs sm:text-base lg:text-lg font-medium leading-5 sm:leading-6 lg:leading-7 max-w-[800px] opacity-0 animate-slide-left">
            "I'm a web designer with extensive experience of over 1 year. My expertise includes website design, frontend development, and more. Additionally, I have completed full-stack development, mastering both backend and frontend technologies."
          </p>

          <div className="social-icons flex justify-center lg:justify-start gap-2 sm:gap-4 mb-6">
            <a href="https://www.linkedin.com/in/deepanshirajput-webdev" className="text-xl sm:text-2xl hover:text-main-color">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://Github.com/Deepanshirajput121 " className="text-xl sm:text-2xl hover:text-main-color">
              <i className="bx bxl-github"></i>
            </a>
            <a href="mailto:deepanshirajput68@gmail.com" className="text-xl sm:text-2xl hover:text-main-color">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="tel:+919560726578" className="text-xl sm:text-2xl hover:text-main-color">
              <i className="bx bxs-phone"></i>
            </a>
          </div>

          <a href="#contact" className="btn inline-block bg-main-color text-white py-1 px-3 sm:py-2 sm:px-6 rounded-md hover:bg-opacity-90 transition">
            More About Me
          </a>
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
