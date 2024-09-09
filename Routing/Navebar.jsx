import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import Img from "../assets/Img.jpg"

function Navbar() {
  return (
    <div className=" flex flex-col h-[full] w-[full] justify-center  text-white ">
      <header className=" bg-gray-900 flex  w-[100%]  items-center justify-between  p-4">
        <p className=" font-bold text-3xl ml-10">Port <span className="text-yellow-400">Folio</span> </p>
        <ul className=" text-center flex text-[1rem] items-center justify-end gap-5 mr-10  ">
          <li className="hover:text-red-500">
            <Link to="/Home1">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/Service">Service</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/Project">Project</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </header>
      {/* <div className=" flex items-center justify-center text-center h-[full] w-[full] mt-4  "> */}
      
      {/* </div> */}
    </div>
  );
}

export default Navbar;
