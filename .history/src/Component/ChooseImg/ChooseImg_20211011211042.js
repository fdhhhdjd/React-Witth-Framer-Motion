import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Navigator from "../../Component/Navigator/Navigator";
import "./ChooseImg.css";
import Cars from "../../Component/ChooseImg/Carts";
import Car from "../../Component/ChooseImg/Cart";
const ChooseImg = () => {
  const location = useLocation();
  return (
    <div>
      <Navigator />
      <Route>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/img" component={Cars} />
          <Route exact path="/img/:id" component={Car} />
        </Switch>
      </Route>
    </div>
  );
};

export default ChooseImg;
