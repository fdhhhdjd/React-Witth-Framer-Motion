import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Dropdown,
  ChooseImg,
  Icons,
  ConvertPage,
  Lottie,
} from "./Import/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dropdown} />
        <Route path="/img" component={ChooseImg} />
        <Route exact path="/icon" component={Icons} />
        <Route path="/page" component={ConvertPage} />
        <Route path="/lottie" component={Lottie} />
      </Switch>
    </Router>
  );
}

export default App;
