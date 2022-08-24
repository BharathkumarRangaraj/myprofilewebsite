import "./Heroimgstyling.css";

import React from "react";
import profbest from "../assets/profbest2.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="Hero">
      <div className="mask">
        <img className="intoimg" src={profbest} alt="profbestimg" />
      </div>
      <div className="content">
        <p>Hi , I'M BHARATH kUMAR,</p>
        <h1>React Developer</h1>

        <div>
          <Link className="btn" to="/Project">
            PROJECT
          </Link>
          <Link className="btn-light" to="/Contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
