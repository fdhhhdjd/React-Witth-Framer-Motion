import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Dropdown} /> */}
        <Route exact path="/" component={ChooseImg} />
      </Switch>
    </Router>
  );
}

export default App;
