import React from "react";
import "./Dropdown.css";
const Dropdown = () => {
  const 
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected"></span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">Choose Img</span> 
        </li>
    
      </ul>
    </div>
  );
};

export default Dropdown;
