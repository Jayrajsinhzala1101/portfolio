import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  const exp = experiences[0]; // Single experience

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-10 lg:px-20 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My work experience and the role I took in the organization
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Experience Entry */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-400 border-4 border-[#8245ec] flex justify-center items-center z-10">
            <img
              src={exp.img}
              alt={exp.company}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content Box */}
          <div className="w-full sm:w-[50%] mt-20 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {exp.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">{exp.company}</h4>
              <p className="text-sm text-gray-500">{exp.date}</p>
            </div>
            <p className="mt-4 text-gray-400">{exp.desc}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
