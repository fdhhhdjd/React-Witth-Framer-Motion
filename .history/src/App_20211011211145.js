import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Dropdown} />
          <Route exact path="/img" component={ChooseImg} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
