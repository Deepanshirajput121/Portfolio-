import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Additional form submission logic can go here
  };

  return (
    <section className="contact" id="contact">
      {/* Heading */}
      <h2 className="text-7xl font-bold text-center mb-8 mt-20">
        {Array.from("Contact Me").map((letter, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="inline-block transition-transform duration-300"
            style={{
              cursor: "pointer",
              transform:
                hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
              color: hoveredIndex === index ? "white" : "var(--main-color)",
              transition: "all 0.3s ease",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>

      {/* Contact Form */}
      <form
        className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto my-20 w-full lg:w-3/4"
        onSubmit={handleSubmit}
      >
        {/* Left Side */}
        <div className="input-box w-full lg:w-1/2">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.fullName}
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phoneNumber}
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            value={formData.subject}
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
        </div>

        {/* Right Side */}
        <div className="input-group-2 w-full lg:w-1/2">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6 resize-none"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn text-main-color text-white px-8 py-4 rounded-full cursor-pointer transition duration-300 w-full"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
