import React, { useEffect, useState } from "react";
import "./button.scss";
import Content from "./Content";
const Button = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
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
