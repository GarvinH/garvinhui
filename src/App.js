import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Portfolio from "./components/Routes/Portfolio/Portfolio";
import Education from "./components/Routes/Education/Education";
import Interests from "./components/Routes/Interests/Interests";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/education" component={Education} />
        <Route path="/interests" component={Interests} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
