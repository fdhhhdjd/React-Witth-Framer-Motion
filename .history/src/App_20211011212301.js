import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/" component={Dropdown} />
    //     <Route exact path="/img" component={ChooseImg} />
    //   </Switch>
    // </BrowserRouter>
    <Navigation />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Cars} />
        <Route exact path="/car/:id" component={Car} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;