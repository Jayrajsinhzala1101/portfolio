import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-7 lg:px-16 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row items-center mb-20"
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-400 border-4 border-[#8245ec] flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:w-[45%] p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "sm:mr-auto sm:pr-10 mt-20" : "sm:ml-auto sm:pl-10 mt-20"}`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
 
