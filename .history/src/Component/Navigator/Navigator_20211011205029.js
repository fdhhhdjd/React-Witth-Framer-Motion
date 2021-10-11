import React from "react";

const Navigator = () => {
  return (
    <div className="navigationBar">
      <div className="logo">
        <img className="logoImage" src="../images/logos/logo.png" alt="" />
      </div>
      <div className="dropdownMenu">
        <div className="dropdownIcon">
          {/* <div className="bar first"></div> */}
          <div className="bar  second"></div>
          <div className="bar third"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
