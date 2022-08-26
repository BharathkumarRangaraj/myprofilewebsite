import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Heroimage2 from "./Components/Heroimage2";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT." para="I'm a friendly Front-end Developer" />
      <Footer />
    </div>
  );
};

export default About;
