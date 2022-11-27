
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";




function App() {

    return (
        <>
        <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <Routes>
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

