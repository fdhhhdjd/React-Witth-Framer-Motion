import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, ChooseImg, Icons, ConvertPage } from "./Import/Index";
import Header from "./Component/ConvertPage/Header";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dropdown} />
        <Route path="/img" component={ChooseImg} />
        <Route exact path="/icon" component={Icons} />
        <Route path="/page" component={ConvertPage} />
      </Switch>
    </Router>
  );
}

export default App;
