import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown } from "./Import/Index";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dropdown} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
