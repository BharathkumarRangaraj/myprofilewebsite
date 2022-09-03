import "./Navbarstyling.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import React from "react";

const Navbar = () => {
  const [click, setclick] = React.useState(false);
  const handleClick = () => setclick(!click);
  const [color, setcolor] = React.useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <Link to={"/"}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/Project"}>Project</Link>
        </li>

        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
