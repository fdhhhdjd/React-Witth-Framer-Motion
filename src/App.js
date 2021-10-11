import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Dropdown} />
      <Route path="/img" component={ChooseImg} />
    </Router>
  );
}

export default App;
