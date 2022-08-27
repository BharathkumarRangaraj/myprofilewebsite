import "./Workcardstyling.css";
import React from "react";

import Workcard from "./Workcard";
import Workcarddata from "./Workcarddata";

const Work = () => {
  return (
    <div className="prjects">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Workcarddata.map((val, ind) => {
          return (
            <Workcard
              key={ind}
              title={val.title}
              imgsrc={val.imgsrc}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
