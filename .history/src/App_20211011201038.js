import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    <BrowserRouter>
      <Dropdown />
      <Switch>
        <Route exact path="/" component={ChooseImg} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
