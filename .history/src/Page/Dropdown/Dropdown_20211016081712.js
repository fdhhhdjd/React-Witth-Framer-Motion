import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import "./reset.css";
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
const Dropdown = () => {
  const [select, setSelect] = useState("Choose Item 😉 ");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/mg") {
      setSelect("Choose Image");
    }
  }, [location]);
  const option = [
    {
      id: 1,
      name: "Choose Img",
      path: "/img",
    },
    {
      id: 2,
      name: "Choose icon",
      path: "/icon",
    },
    {
      id: 3,
      name: "Choose page",
      path: "/page",
    },
    {
      id: 4,
      name: "Choose lottie",
      path: "/lottie",
    },
    {
      id: 5,
      name: "Choose button react-string",
      path: "/string",
    },
  ];
  return (
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">{select}</span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">
        {option.map((item) => {
          return (
            <>
              <Link to={`${item.path}`} className="dropdown__item">
                <span class="dropdown__text">{item.name}</span>
              </Link>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
