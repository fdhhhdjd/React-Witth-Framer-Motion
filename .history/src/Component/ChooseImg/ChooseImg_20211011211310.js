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

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route>
            <Route exact path="/img" component={Cars} />
            <Route exact path="/img/:id" component={Car} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default ChooseImg;
