import React, { useState } from "react";
import "./button.scss";
import Content from "./content";
const Button = () => {
  const [offsetY, setOffsetY] = useState(0);
  return (
    <>
      <section className="Parallax">
        <div className="Parallax__background" />
        <div className="Parallax__background-triangles" />
        <div className="Parallax__content">
          <Content />
        </div>
      </section>
    </>
  );
};

export default Button;
