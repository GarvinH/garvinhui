import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "components/Routes/Home/Home";
import Portfolio from "components/Routes/Portfolio/Portfolio";
import Education from "components/Routes/Education/Education";
import Interests from "components/Routes/Interests/Interests";
import Experience from "components/Routes/Experience/Experience";
import NeoTokyo from "components/Routes/NeoTokyo/NeoTokyo";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/education" component={Education} />
        <Route path="/interests" component={Interests} />
        <Route path="/experience" component={Experience} />
        <Route path="/home" component={Home} />
        <Route path="/" component={NeoTokyo} />
      </Switch>
    </div>
  );
}

export default App;
