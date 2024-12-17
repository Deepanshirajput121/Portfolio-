import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Skills.css";

const Skills = () => {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Thunder Client",
    "Vite",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < technicalSkills[currentSkillIndex].length) {
          setCurrentText(
            (prev) =>
              prev + technicalSkills[currentSkillIndex].charAt(charIndex)
          );
          setCharIndex((prev) => prev + 1);
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % technicalSkills.length);
          setTypingSpeed(300);
        }
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, typingSpeed, currentSkillIndex]);

  if (loading) return <Loader />;

  return (
    <section className="skill py-8 mt-20 relative">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl text-center font-bold mb-10">
        {Array.from("Skills & Activities").map((letter, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="inline-block transition-transform duration-300"
            style={{
              transform:
                hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
              color: hoveredIndex === index ? "white" : "var(--main-color)",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>

      {/* Responsive Layout */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:w-[90%] mx-auto gap-10"
      >
        {/* Cube Section */}
        <div
          className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="skills-3d-cube hover-animation">
            <div className="skill-face front">
              <p>{currentText}</p>
            </div>
            <div className="skill-face back">
              <p>
                {
                  technicalSkills[
                    (currentSkillIndex + 1) % technicalSkills.length
                  ]
                }
              </p>
            </div>
            <div className="skill-face left">
              <p>
                {
                  technicalSkills[
                    (currentSkillIndex + 2) % technicalSkills.length
                  ]
                }
              </p>
            </div>
            <div className="skill-face right">
              <p>
                {
                  technicalSkills[
                    (currentSkillIndex + 3) % technicalSkills.length
                  ]
                }
              </p>
            </div>
            <div className="skill-face top">
              <p>
                {
                  technicalSkills[
                    (currentSkillIndex + 4) % technicalSkills.length
                  ]
                }
              </p>
            </div>
            <div className="skill-face bottom">
              <p>
                {
                  technicalSkills[
                    (currentSkillIndex + 5) % technicalSkills.length
                  ]
                }
              </p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-[50%] lg:w-[60%] px-4">
          <p className="text-lg font-light">
            <span className="font-semibold">TECHNICAL SKILLS:</span> Skilled in
            both
            <span className="text-[var(--main-color)]">
              {" "}
              Frontend Development{" "}
            </span>
            and
            <span className="text-[var(--main-color)]">
              {" "}
              Backend Development
            </span>
            . Expertise in technologies like:
            <span className="text-[var(--main-color)]"> HTML</span>,
            <span className="text-[var(--main-color)]"> CSS</span>,
            <span className="text-[var(--main-color)]"> JavaScript ES6+</span>,
            <span className="text-[var(--main-color)]"> React.js</span>,
            <span className="text-[var(--main-color)]"> Tailwind CSS</span>,
            <span className="text-[var(--main-color)]"> Next.js</span>,
            <span className="text-[var(--main-color)]"> Vite</span>,
            <span className="text-[var(--main-color)]"> Node.js</span>,
            <span className="text-[var(--main-color)]"> Express.js</span>, and
            <span className="text-[var(--main-color)]"> MongoDB</span>.
            Experienced with tools like
            <span className="text-[var(--main-color)]"> Git</span>,
            <span className="text-[var(--main-color)]"> GitHub</span>, and
            <span className="text-[var(--main-color)]"> Thunder Client</span>.
            Skilled in creating responsive and scalable web applications.
          </p>

          <p className="text-lg font-light mt-6">
            <span className="font-semibold">PROJECT HIGHLIGHTS:</span> Built
            several full-stack projects, including: an Amazon clone, a Netflix
            clone, a Spotify clone, and a service-based Real Vision website.
            Successfully integrated features like API handling, database
            connectivity, authentication, and more. Each project showcases
            in-depth knowledge of web development.
          </p>

        <div className="skill-item">
          <p className="text-lg font-light mt-2">
            <span className="font-semibold">SOFT SKILLS:</span>
            <span className="text-[var(--main-color)]">
              {" "}
              Effective Communication
            </span>
            ,<span className="text-[var(--main-color)]"> Teamwork</span>,
            <span className="text-[var(--main-color)]">
              {" "}
              Team Collaboration
            </span>
            , Presentation, Time Management, Leadership, Ability to
            troubleshoot,
            <span className="text-[var(--main-color)]">
              {" "}
              Problem-Solving Skills
            </span>
            , and
            <span className="text-[var(--main-color)]"> Critical Thinking</span>
            .
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
