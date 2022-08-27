import React from "react";
import Navbar from "./Components/Navbar";
import Heroimg from "./Components/Heroimg";
import Footer from "./Components/Footer";
import Work from "./Components/work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />

      <Footer />
    </div>
  );
};

export default Home;
