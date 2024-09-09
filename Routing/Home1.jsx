import React from "react";
// import Img from "../assets/Img.jpg";
import Icon1 from "../assets/Icon1.png";

function Home1() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full justify-evenly bg-gray-700 text-white p-10 md:p-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between text-lg w-full">
        {/* Text Section */}
        <div className="mt-4 md:mt-2 font-normal text-left max-w-md">
          <h3 className="text-2xl md:text-4xl font-bold">
            Hi, I&apos;m <br />
            <span className="text-yellow-400">Ramesh</span> Kumar
          </h3>
          <p className="gap-5 mt-4">
            I am a web developer with expertise in building<br /> responsive,
             modern websites using HTML, CSS,<br /> JavaScript,
             and React to create seamless user experiences.
          </p>
          <div className="flex items-center justify-start mt-4">
            <a
              href="http://localhost:5173/About"
              className="p-2 bg-white text-black rounded-lg mt-2 hover:bg-yellow-400 hover:text-white transition-all duration-300"
            >
              About <span className="text-yellow-400">Me</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-10 flex justify-center">
          <div className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] border-4 border-solid border-yellow-400 rounded-full flex items-center justify-center">
            <img
              src={Icon1}
              alt="Profile"
              className="h-[250px] w-[250px] md:h-[295px] md:w-[295px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
