import "./Footerstyling.css";

import React from "react";
import {
  FaGit,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div className="addreess">
              <p>348 Gandhipuram</p>
              <p>Erode,Tamil Nadu</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 6380494790
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              rbharathkumar12@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Front end developer with the knowledge of HTML, CSS ,JavaScript,
            React and version controls tools
          </p>

          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
