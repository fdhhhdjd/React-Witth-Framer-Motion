import React, { useState } from "react";
import "./Dropdown.css";
import "./reset.css";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">Call to action</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">New project</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">View profile</span>
          <i class="fa fa-user dropdown__icon"></i>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Settings</span>
          <i class="fa fa-cog dropdown__icon"></i>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Logout</span>
          <i class="fa fa-circle dropdown__icon"></i>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
