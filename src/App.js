import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
