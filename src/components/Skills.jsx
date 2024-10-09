import React from "react";

const Skills = () => {
  return (
    <section className="skill py-8 mt-20">
    <h1 className="text-7xl font-bold text-center mb-8">My <span className="text-main-color">Skills</span></h1>
    

       {/* Technical Skills */}
       <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bar">
            <i className="bx bxl-html5 text-5xl" style={{ color: '#e34c26' }}></i>
            <span className="text-lg font-bold text-white">HTML</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-11/12"></div>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-css3 text-5xl" style={{ color: '#264de4' }}></i>
            <span className="text-lg font-bold text-white">CSS</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-10/12"></div>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-javascript text-5xl" style={{ color: '#f7df1e' }}></i>
            <span className="text-lg font-bold text-white">JavaScript</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-9/12"></div>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-react text-5xl" style={{ color: '#61dbfb' }}></i>
            <span className="text-lg font-bold text-white">React</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-8/12"></div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bar">
            <i className="bx bxl-nodejs text-5xl" style={{ color: '#68a063' }}></i>
            <span className="text-lg font-bold text-white">Node.js</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-9/12"></div>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-express text-5xl" style={{ color: '#000000' }}></i>
            <span className="text-lg font-bold text-white">Express.js</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-9/12"></div>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-mongodb text-5xl" style={{ color: '#47a248' }}></i>
            <span className="text-lg font-bold text-white">MongoDB</span>
            <div className="progress-line bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-indigo-600 h-full w-8/12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Skills */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Radial bars */}
          <div className="radial-bar flex flex-col items-center">
            <svg className="w-24 h-24 mb-4" viewBox="0 0 200 200">
              <circle className="text-gray-200" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" fill="none"></circle>
              <circle className="path-1 text-indigo-600" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" strokeDasharray="400" strokeDashoffset="40"></circle>
            </svg>
            <div className="percentage text-lg font-semibold">90%</div>
            <div className="text-lg font-bold">Creativity</div>
          </div>
          {/* Communication */}
        
          <div className="radial-bar flex flex-col items-center">
            <svg className="w-24 h-24 mb-4" viewBox="0 0 200 200">
              <circle className="text-gray-200" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" fill="none"></circle>
              <circle className="path-1 text-indigo-600" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" strokeDasharray="400" strokeDashoffset="40"></circle>
            </svg>
            <div className="percentage text-lg font-semibold">65%</div>
            <div className="text-lg font-bold">Communication</div>
          </div> 


          {/* Problem Solving */}
          <div className="radial-bar flex flex-col items-center">
            <svg className="w-24 h-24 mb-4" viewBox="0 0 200 200">
              <circle className="text-gray-200" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" fill="none"></circle>
              <circle className="path-1 text-indigo-600" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" strokeDasharray="400" strokeDashoffset="40"></circle>
            </svg>
            <div className="percentage text-lg font-semibold">75%</div>
            <div className="text-lg font-bold">Problem Solving</div>
          </div> 

          {/* Teamwork */}
          <div className="radial-bar flex flex-col items-center">
            <svg className="w-24 h-24 mb-4" viewBox="0 0 200 200">
              <circle className="text-gray-200" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" fill="none"></circle>
              <circle className="path-1 text-indigo-600" cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="10" strokeDasharray="400" strokeDashoffset="40"></circle>
            </svg>
            <div className="percentage text-lg font-semibold">85%</div>
            <div className="text-lg font-bold">Teamwork</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
