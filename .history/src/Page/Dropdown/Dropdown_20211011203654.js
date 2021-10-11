import React, { useState } from "react";
import "./Dropdown.css";
import "./reset.css";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  const option = [
    {
      id: 1,
      name: "Choose Img",
      path: "/",
    },
    {
      id: 2,
      name: "Tow",
      path: "/tow",
    },
  ];
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">Call to action</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        {option.map((item) => {
          return (
            <>
              <li class="dropdown__item">
                <span class="dropdown__text">{item.name}</span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
