import React from "react";
import { FaStreetView } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
// import Img from "../assets/Img2.png";
import Icon1 from "../assets/Icon1.png"

function About() {
  return (
    <div className="h-full w-full bg-gray-700 flex flex-col p-2">
      <h3 className="items-center justify-center flex text-white font-bold text-3xl mt-5">
        About <span className="text-yellow-400 ml-2">Me</span>
      </h3>
      <div className="flex flex-col md:flex-row justify-around items-center mb-10">
        {/* Profile Image */}
        <div className="text-center mb-5 md:mb-0 h-[250px] w-[250px] ">
          <img
            src={Icon1}
            alt="Profile"
            className="h-[310px] w-[300px] rounded-full  object-cover"
          />
        </div>
        <div className="flex flex-col text-white text-left h-auto w-[80%] md:w-[40%] justify-center items-center">
          <div className="block mt-5">
            <p className="font-normal text-sm">
              Hi, I'm Ramesh Kumar, a passionate Frontend Developer with
              expertise in creating clean, responsive, and user-friendly
              websites. With a strong foundation in HTML, CSS, and JavaScript, I
              specialize in building modern web applications that offer seamless
              user experiences. I’m well-versed in frameworks like React, and I
              enjoy turning design ideas into functional code.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-evenly gap-3 p-2">
            {/* Skills Section */}
            <div className="w-[230px] h-auto flex-col bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold text-2xl text-yellow-400 text-center mb-2">
                Skills
              </h3>
              <ul className="font-sm">
                <li className="mb-2">
                  HTML-5
                  <div className="bg-gray-600 h-[10px] rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[70%]" />70%
                  </div>
                </li>
                <li className="mb-2">
                  CSS
                  <div className="bg-gray-600 h-[10px] rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[65%]" />
                  </div>
                </li>
                <li className="mb-2">
                  JavaScript
                  <div className="bg-gray-600 h-[10px] rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[60%]" />
                  </div>
                </li>
                <li className="mb-2">
                  React.js
                  <div className="bg-gray-600 h-[10px] rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[65%]" />
                  </div>
                </li>
                <li className="mb-2">
                  Python
                  <div className="bg-gray-600 h-[10px] rounded-lg overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[70%]" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="w-[230px] h-auto flex-col items-center bg-gray-800 rounded-lg p-4">
              <h3 className="font-bold text-2xl text-yellow-400 text-center mb-2">
                Education
              </h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <span className="text-yellow-400">2021-2025</span>
                  <br />
                  B.Tech CSE, I.K.G.P.T.U <br />
                  Punjab
                </li>
                <li>
                  <span className="text-yellow-400">2021</span>
                  <br />• I.SC With PCM <br /> J.K college Biraul
                  BSEB, Patna, Bihar
                </li>
                <li>
                  <span className="text-yellow-400">2019</span><br />
                  • 
                   +2 High School Asi,
                  Darbhanga
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="p-2 w-[150px] text-white bg-blue-500 items-center flex justify-center rounded-xl mt-5 gap-2">
              <FaStreetView size={20} />
              <a
                href="https://drive.google.com/file/d/1iBCIfPb4WdG-KIBBZyWU6VyEvIyIY9TV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
            <div className="p-2 w-[150px] text-white bg-blue-500 items-center flex justify-center rounded-xl mt-5 gap-2">
              <FaServicestack size={25} />
              <a href="http://localhost:5173/Service">Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
