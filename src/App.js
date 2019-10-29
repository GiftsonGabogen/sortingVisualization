import React from "react";
import "./App.css";
import Visualizer from "./Components/Visualizer.jsx";
import Reload from "./Components/Reload";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Visualizer} />
      <Route path="/Reload/:url" component={Reload} />
    </div>
  );
}

export default App;
