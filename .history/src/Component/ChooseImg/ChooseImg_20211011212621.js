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
        <Switch location={location} key={location.pathname}>
          <Route>
            <Route path={`${path}`} component={Cars} />
            <Route path={`${path}car/:/id`} component={Car} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default ChooseImg;
