import React, { useState, useEffect } from "react";
import "./Projects.css";
import Loader from "./Loader"; // Loader component import

const Projects = () => {
  const [loading, setLoading] = useState(true); // Loading state

  const projectData = [
    {
      title: "Ecommerce-Website",
      description:
        "A fully responsive e-commerce site with product listings, user authentication, and shopping cart features.",
      imageUrl: "/images/ecomm.png",
      repoLink: "https://ecommerce-website-theta-black.vercel.app/",
      liveLink: "https://ecommerce-website-theta-black.vercel.app/", // Replace with real link
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "A simple and fun Rock Paper Scissors game where players can compete against the computer.",
      imageUrl: "/images/Game.png",
      repoLink: "https://game-ten-lyart.vercel.app/",
      liveLink: "https://game-ten-lyart.vercel.app/", // Replace with real link
    },
    {
      title: "Real Vision",
      description:
        "An event management service-based website that provides DJ, sound system, and lighting services.",
      imageUrl: "/images/realvision.png",
      repoLink: "https://real-vision-iota.vercel.app", // Real link
      liveLink: "https://real-vision-iota.vercel.app", // Replace with real link
    },
    {
      title: "Netflix Clone",
      description:
        "A streaming platform with the ability to browse and view videos.",
      imageUrl: "/images/Netflex.png",
      repoLink: "https://deepanshirajput121.github.io/Netflix_Clone/",
      liveLink: "https://your-live-link.com/netflix-clone", // Replace with real link
    },
  ];

  // Handle loader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 1000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  return (
    <section id="projects" className="py-12 mt-20">
      <h2 className="text-6xl font-bold text-center mb-8">
        {Array.from("My Projects").map((char, index) => (
          <span key={index} className="animate-char">
            {char === " " ? "\u00A0" : char} {/* Space support */}
          </span>
        ))}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 my-2">{project.description}</p>
            <div className="flex justify-end mt-4">
              <a
                href={project.liveLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
