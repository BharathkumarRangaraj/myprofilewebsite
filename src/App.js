import React from "react";

import Project from "./Routes/Project.js";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact.js";
import About from "./Routes/About.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        v<Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
