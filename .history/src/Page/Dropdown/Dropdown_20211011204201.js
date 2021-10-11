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
    if (location.pathname === "/") {
      setSelect(option.name);
    }
  }, [location]);
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
