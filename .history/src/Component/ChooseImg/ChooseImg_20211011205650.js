import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Navigator from "../../Component/Navigator/Navigator";
import "./ChooseImg.css";
const ChooseImg = () => {
  const location = useLocation();
  return (
    <div>
      <Navigator />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/cart" component={Cars} />
        <Route exact path="/car/:id" component={Car} />
      </Switch>
    </div>
  );
};

export default ChooseImg;
