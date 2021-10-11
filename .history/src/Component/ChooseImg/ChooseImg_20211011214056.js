import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import Navigator from "../../Component/Navigator/Navigator";
import "./ChooseImg.css";
import Cars from "../../Component/ChooseImg/Carts";
import Car from "../../Component/ChooseImg/Cart";
const ChooseImg = () => {
  const location = useLocation();
  const { path, url } = useRouteMatch();
  return (
    <div>
      <Navigator />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/img" component={Cars} />
          <Route exact path="/img/car/:id" component={Car} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default ChooseImg;
