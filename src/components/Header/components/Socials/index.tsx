import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/marcusrodriguesdev/" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin size={26} />
      </a>
      <a href="https://github.com/marcusrodriguesdev" target="_blank" rel="noreferrer">
        <AiOutlineGithub size={26} />
      </a>
    </div>
  );
};

export default Socials;
