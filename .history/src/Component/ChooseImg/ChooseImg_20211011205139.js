import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Navigator from "../../Component/Navigator/Navigator";
import "./ChooseImg.css";
const ChooseImg = () => {
  return (
    <div>
      <Navigator />
    </div>
  );
};

export default ChooseImg;
