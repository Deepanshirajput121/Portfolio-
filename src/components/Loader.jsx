// Loader.js
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="ripple-circle">
        <div className="ripple"></div>
        <div className="ripple"></div>
        <div className="ripple"></div>
      </div>
    </div>
  );
};

export default Loader;
