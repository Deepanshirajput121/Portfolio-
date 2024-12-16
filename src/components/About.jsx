import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import './about.css';


const About = () => {
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    // Loader logic with a 1-second delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      className="about-section flex flex-col md:flex-row items-center justify-center gap-x-8 py-12 px-6"
      id="about"
    >
      {/* About Section */}
      <div className="about-text mt-40 w-full md:w-1/2 text-center md:text-left md:ml-8">
        {/* Animated Title */}
        <h2 className="text-7xl font-bold mb-4">
          {Array.from("About Me").map((letter, index) => (
            <span
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="inline-block transition-transform duration-300 hover:animate-bounce"
              style={{
                cursor: "pointer",
                color: hoveredIndex === index ? "white" : "var(--main-color)",
                transition: "color 0.3s ease",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>

        {/* Description */}
        <p className="text-xl leading-7 mb-6">
          I am a skilled web designer and <strong>full stack developer</strong>{" "}
          with over 1 year of experience in both{" "}
          <span className="text-[var(--main-color)]">frontend</span> and{" "}
          <span className="text-[var(--main-color)]">backend</span> development.
          My passion lies in creating captivating website designs and
          implementing seamless functionality. On the frontend, I specialize in
          building responsive and visually appealing websites using technologies
          like <strong>HTML, CSS, Tailwind CSS,</strong> and{" "}
          <strong>React</strong>.
        </p>
        <p className="text-xl leading-7 mb-6">
          On the backend, I am proficient in building efficient and scalable
          server-side applications using <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>. I ensure
          smooth communication between the frontend and backend, prioritizing{" "}
          <span className="text-[var(--main-color)]">performance</span>,{" "}
          <span className="text-[var(--main-color)]">security</span>, and{" "}
          <span className="text-[var(--main-color)]">data integrity</span> in
          all my projects. My goal is to deliver complete web solutions that
          look great and perform exceptionally, providing an intuitive
          experience for users.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="btn inline-block bg-[var(--main-color)] text-white py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition-all"
        >
          More About Me
        </a>
      </div>

      {/* Animated Skills Cube */}
      <div className="scene w-full md:w-1/2 mt-12 md:mt-0">
        <div className="cube">
          <div className="cube-face github">
            <i className="fab fa-github"></i> {/* GitHub Icon */}
          </div>
          <div className="cube-face css">
            <i className="fab fa-css3-alt"></i> {/* CSS Icon */}
          </div>
          <div className="cube-face js">
            <i className="fab fa-js"></i> {/* JavaScript Icon */}
          </div>
          <div className="cube-face react">
            <i className="fab fa-react"></i> {/* React Icon */}
          </div>
          <div className="cube-face node">
            <i className="fab fa-node"></i> {/* Node.js Icon */}
          </div>
          <div className="cube-face mongodb">
            <i className="fas fa-database"></i> {/* MongoDB Icon */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
