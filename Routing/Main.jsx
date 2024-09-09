import React from 'react'
import "../Routing/Main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "../Routing/Navebar";
import About from "../Routing/About";
import Contact from "../Routing/Contact";
import Home1 from "../Routing/Home1";
import Service from "../Routing/Service";
import Project from "../Routing/Project";
import Footer from "../Routing/Footer"

function Main() {
  return (
    <BrowserRouter >
    <Navebar/>
      <Routes>
        <Route path="/home1" element={<Home1 />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Main;
