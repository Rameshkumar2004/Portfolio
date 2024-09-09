import React from "react";
import BMICal from "../assets/BMICal.png";
import BC from "../assets/BC.png";
import Todo from "../assets/Todo.png";
import Amazon from "../assets/Amazon.png";

function Project() {
  return (
    <div className="bg-gray-600 text-white w-full py-10 pb-24">
      <div className="flex items-center justify-center font-bold text-3xl mb-6">
        Project
      </div>
      <div className="flex justify-between gap-4 px-5 ">
        {/* BMI Calculator Card */}
        <div className="rounded-lg flex flex-col items-center justify-center w-[22%] h-[270px] bg-gray-800 py-2">
          <h3>
            <span className="text-yellow-400">BMI</span> Calculator
          </h3>
          <img src={BMICal} alt="Error" className="h-[180px] w-[80%] object-cover rounded-lg py-2" />
          <a
            href="https://github.com/Rameshkumar2004/project-demo/blob/BMI%26TODO/Code/src/Project-code/BMIcalculator.jsx"
            className="bg-blue-600 p-2 h-10 w-[80%] flex items-center justify-center text-white rounded-lg"
          >
            Code
          </a>
        </div>

        {/* Color Changer Card */}
        <div className="rounded-lg flex flex-col items-center justify-center w-[22%] h-[270px] bg-gray-800">
          <h3>
            <span className="text-yellow-400">Color</span> Changer
          </h3>
          <img src={BC} alt="Error" className="h-[180px] w-[80%] object-cover rounded-lg py-2" />
          <a
            href="https://github.com/Rameshkumar2004/project-demo/tree/main/Code/src/Components"
            className="bg-blue-600 p-2 h-10 w-[80%] flex items-center justify-center text-white rounded-lg"
          >
            Code
          </a>
        </div>

        {/* Todo List Card */}
        <div className="rounded-lg flex flex-col items-center justify-center w-[22%] h-[270px] bg-gray-800">
          <h3>
            Todo <span className="text-yellow-400">List</span>
          </h3>
          <img src={Todo} alt="Error" className="h-[180px] w-[80%] object-cover rounded-lg " />
          <a
            href=""
            className="bg-blue-600 p-2 h-10 w-[80%] flex items-center justify-center text-white rounded-lg"
          >
            Code
          </a>
        </div>

        {/* Amazon Clone Card */}
        <div className="rounded-lg flex flex-col items-center justify-center w-[22%] h-[270px] bg-gray-800">
          <h3>
            Amazon <span className="text-yellow-400">Clone</span>
          </h3>
          <img src={Amazon} alt="Error" className="h-[180px] w-[80%] object-cover rounded-lg py-2" />
          <a
            href="https://github.com/Rameshkumar2004/Amazon-Clone/blob/main/project/index.html"
            className="bg-blue-600 p-2 h-10 w-[80%] flex items-center justify-center text-white rounded-lg"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
