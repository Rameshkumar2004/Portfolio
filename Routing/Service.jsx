import React from "react";
import { FaCode } from "react-icons/fa6";
import { SiCodersrank } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Service() {
  return (
    <div className="bg-gray-700 text-white w-full h-full flex justify-center items-center mt-0 py-20 px-9">
      <div className="text-center mx-5 md:mx-20">
        <h3 className="font-bold text-3xl">
          <span className="text-yellow-400">My</span> Services
        </h3>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Web Design Card */}
          <div className="border-2 border-green-400 h-[250px] w-[250px] md:w-[250px] flex flex-col items-center justify-center rounded-lg">
            <FaCode size={40} className="text-yellow-400 mb-5" />
            <h3 className="font-bold text-xl">Web Design</h3>
            <p className="mt-2 px-4 text-sm text-left">
              Web design involves creating visually appealing, user-friendly websites with responsive layouts, intuitive navigation, and engaging content.
            </p>
            <p className="text-blue-500 font-bold mt-3">Learn more</p>
          </div>

          {/* UI/UX Design Card */}
          <div className="border-2 border-green-400 h-[250px] w-[250px] md:w-[250px] flex flex-col items-center justify-center rounded-lg">
            <SiCodersrank size={40} className="text-yellow-400 mb-5" />
            <h3 className="font-bold text-xl">UI/UX Design</h3>
            <p className="mt-2 px-4 text-sm font-normal text-left">
              UI/UX design focuses on creating intuitive, user-friendly interfaces that enhance user interaction and experience.
            </p>
            <p className="text-blue-500 font-bold mt-3">Learn more</p>
          </div>

          {/* Python Developer Card */}
          <div className="border-2 border-green-400 h-[250px] w-[250px] md:w-[250px] flex flex-col items-center justify-center rounded-lg">
            <FaPython size={40} className="text-yellow-400 mb-5" />
            <h3 className="font-bold text-xl">Python Development</h3>
            <p className="mt-2 px-4 text-sm text-left">
              Specializing in building back-end systems, data analysis, automation, and deploying applications using Python.
            </p>
            <p className="text-blue-500 font-bold mt-3">Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
