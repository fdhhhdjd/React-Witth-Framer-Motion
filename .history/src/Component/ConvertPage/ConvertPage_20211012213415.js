import React from "react";
import "./Main.css";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./Animations/GlobalStyle";
import Home from "../../Page/PageConvertPage/Home";
import About from "../../Page/PageConvertPage/About";
import Services from "../../Page/PageConvertPage/Service";
const Section = styled.section`
  overflow-x: hidden;
`;
const ConvertPage = () => {
  let location = useLocation();
  const { path } = useRouteMatch();

  return (
    <>
      <Section>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/img" component={Cars} />
            <Route exact path="/img/car/:id" component={Car} />
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
};

export default ConvertPage;
