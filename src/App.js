
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import './app.css';
import GroupProjectPicture from './pic/GroupProjectPicture.JPG'




function App() {

    return (
        <>
        <BrowserRouter>
        <div class = "navbar">
        <NavLink id="Home" to="/">Home</NavLink>
        <NavLink id ="About" to="/about">About</NavLink>
        <NavLink id ="Contact" to="/contact">Contact</NavLink>
        <NavLink id ="Projects" to="/projects">Projects</NavLink>
        </div>
        <Routes class>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element ={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default App

