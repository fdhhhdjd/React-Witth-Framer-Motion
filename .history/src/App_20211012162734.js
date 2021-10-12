import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, ChooseImg } from "./Import/Index";
import Index from "./Component/watchImage/WatchImage";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Dropdown} />
      <Route path="/img" component={ChooseImg} />
      <Route path="/test" component={WatchImage} />
    </Router>
  );
}

export default App;
