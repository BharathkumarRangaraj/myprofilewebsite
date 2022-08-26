import "./Workcardstyling.css";
import React from "react";
import pro1 from "../assets/prof.jpg";
import { NavLink } from "react-router-dom";

const Workcard = () => {
  return (
    <div className="prjects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is the text of the project</p>
            <div className="pro-btns">
              <NavLink className="btns" to="url.com">
                View
              </NavLink>
              <NavLink className="btns" to="url.com">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
