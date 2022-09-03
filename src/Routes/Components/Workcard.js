import "./Workcardstyling.css";
import React from "react";
import Workcarddata from "./Workcarddata";

import { NavLink, Link } from "react-router-dom";

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink className="btnss" to={props.view}>
            View
          </NavLink>
          <NavLink className="btnss" to={props.source}>
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
