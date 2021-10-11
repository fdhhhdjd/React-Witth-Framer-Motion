import React, { useState } from "react";
import "./Dropdown.css";
import "./reset.css";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">{select}</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">New project</span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
