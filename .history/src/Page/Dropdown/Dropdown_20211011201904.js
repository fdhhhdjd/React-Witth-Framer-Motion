import React, { useState } from "react";
import "./Dropdown.css";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">{select}</span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text"></span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
