import React from "react";
import "./Main.css";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
const Section = styled.section;
const ConvertPage = () => {
  return (
    <>
      <Section>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
};

export default ConvertPage;
