import React from "react";

const Button = () => {
  return (
    <div className="cta">
      <a
        className="btn"
        href={
          "../../../assets/marcus-curriculo.pdf"
        }
        download
      >
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  );
};

export default Button;
