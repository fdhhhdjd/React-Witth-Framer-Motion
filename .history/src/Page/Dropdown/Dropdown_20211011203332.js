import React, { useState } from "react";
import "./Dropdown.css";
import "./reset.css";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  const option = [
    {
      id: 1,
      name: "ChooseImage",
      path: "/",
    },
    {
      id: 2,
      name: "A",
      path: "/A",
    },
  ];
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">{select}</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
     {option.map(item)=>{
       return(
         <>
            <li class="dropdown__item">
          <span class="dropdown__text">New project</span>
        </li>
         </>
       )
     }}
      </ul>
    </div>
  );
};

export default Dropdown;
