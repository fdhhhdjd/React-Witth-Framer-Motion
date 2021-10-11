import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dropdown} />
        <Route exact path="/img:id" component={ChooseImg} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
