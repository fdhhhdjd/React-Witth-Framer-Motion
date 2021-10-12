import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dropdown, ChooseImg, Icons, ConvertPage } from "./Import/Index";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dropdown} />
      <Route path="/img" component={ChooseImg} />
      <Route exact path="/icon" component={Icons} />
      <Route path="/page" component={ConvertPage} />
    </BrowserRouter>
  );
}

export default App;
