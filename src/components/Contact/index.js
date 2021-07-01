import React from "react";
import CopyMailTo from "react-copy-mailto";

const Contact = () => (
  <div>
    <h1>
      <u>Contact Me</u>
    </h1>
    <h4>
      <CopyMailTo email="matthew.e.crouse@gmail.com" />
    </h4>
  </div>
);


export default Contact;
