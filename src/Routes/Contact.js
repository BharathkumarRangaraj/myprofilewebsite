import React from "react";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Heroimage2 from "./Components/Heroimage2";
import Form from "./Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT." para="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
