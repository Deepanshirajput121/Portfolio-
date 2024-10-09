import React from "react";

const About = () => {
  return (
    <section
      className="about-section flex flex-col md:flex-row items-center justify-center py-12"
      id="about"
    >
      {/* Image Section */}
      <div className="home-img rounded-full">
          <video
            src="/videos/video2.mp4" // Correct path to your video
            title="Deepanshi Animation"
            className="flip-horizontalrelative top-12 w-[32vw] rounded-full transition-all duration-400 ease-in-out cursor-pointer"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>

      {/* Text Section */}
      <div className="about-text w-full md:w-1/2 text-center md:text-left p-6">
        <h2 className="text-7xl font-bold mb-4 mt-10">
          About <span className="text-main-color">Me</span>
        </h2>
        <h4 className="text-5xl font-semibold text-main-color mb-4 mt-9">
          Full Stack Developer
        </h4>
        <p className="leading-7 mb-6 mt-9 text-xl">
  I am a skilled web designer and full stack developer with over 1 year of experience in both frontend and backend development. My passion lies in creating captivating website designs and implementing seamless functionality. On the frontend, I specialize in building responsive and visually appealing websites using technologies like HTML, CSS, Tailwind CSS, and React. 
</p>
<p className="text-xl leading-7 mb-6">
  On the backend, I am proficient in building efficient and scalable server-side applications using Node.js, Express, and MongoDB. I ensure smooth communication between the frontend and backend, and I prioritize performance, security, and data integrity in all my projects. My goal is to deliver complete web solutions that not only look great but also perform exceptionally well, providing an intuitive experience for end-users. With each project, I tailor my approach to meet the client’s needs and focus on delivering high-quality results.
</p>

        <a
          href="#contact"
          className="btn inline-block bg-main-color text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition"
        >
          More About Me
        </a>
      </div>
    </section>
  );
};

export default About;
