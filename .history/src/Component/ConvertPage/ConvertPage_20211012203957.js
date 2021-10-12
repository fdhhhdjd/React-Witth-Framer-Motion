import React from "react";
import "./Main.css";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./Animations/GlobalStyle";
import Home from "../../Page/PageConvertPage/Home";
const Section = styled.section`
  overflow-x: hidden;
`;
const ConvertPage = () => {
  let location = useLocation();

  return (
    <>
      <Section>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {/* <Route path="/page/ok" exact component={Home} /> */}
            <Route path="/about" component={About} />
            {/* <Route path="/services" component={Services} />  */}
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
};

export default ConvertPage;
