import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Amazon Clone",
      description:
      "A fully responsive e-commerce site with product listings, user authentication, and shopping cart features.",
      imageUrl: "/images/Amazon.png",
      repoLink: "https://deepanshirajput121.github.io/Amazon_Clone/",
    },
    {
      title: "Netflix Clone",
      description:
        "A streaming platform with the ability to browse and view videos.",
      imageUrl: "/images/Netflex.png",
      repoLink: "https://deepanshirajput121.github.io/Netflix_Clone/",
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "A simple and fun Rock Paper Scissors game where players can compete against the computer.",
      imageUrl: "/images/Game.png",
      repoLink: "https://deepanshirajput121.github.io/Game/",
    },
    {
      title: "Real Vision",
      description:
        "An event management service-based website that provides DJ, sound system, and lighting services.",
      imageUrl: "/images/realvision.png",
      repoLink: "https://github.com/Deepanshirajput121/real-vision",
    },
  ];

  return (
    <section id="projects" className="py-12 mt-20">
      <h2 className="text-6xl font-bold text-center mb-8">
        My <span className="text-main-color"> Projects </span>
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
                href={project.repoLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
