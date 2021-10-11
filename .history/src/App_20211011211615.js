import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dropdown} />
        <Route path="/img" component={ChooseImg} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
