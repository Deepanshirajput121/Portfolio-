import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="text-7xl font-bold text-center mb-8 mt-20">
        Contact <span className="text-main-color">Me</span>
      </h2>

      <form className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-auto my-20 w-full lg:w-3/4">
        {/* Left side container for input fields */}
        <div className="input-box w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6"
          />
        </div>

        {/* Right side container for message and button */}
        <div className="input-group-2 w-full lg:w-1/2">
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full p-8 text-xl text-gray-700 bg-gray-800 rounded-2xl border-2 border-indigo-500 mb-6 resize-none"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn text-main-color text-white px-8 py-4 rounded-full cursor-pointe transition duration-300 w-full"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
