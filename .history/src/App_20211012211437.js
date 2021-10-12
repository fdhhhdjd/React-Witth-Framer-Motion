import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, ChooseImg, Icons, ConvertPage } from "./Import/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dropdown} />
        <Route path="/img" component={ChooseImg} />
        <Route exact path="/icon" component={Icons} />
        <Route exact path="/page" component={ConvertPage} />
      </Switch>
    </Router>
  );
}

export default App;
