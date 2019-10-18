import React from "react";
import "./App.css";
import Visualizer from "./Components/Visualizer.jsx";
import Home from "./Components/Home.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Visualizer" component={Visualizer} />
    </div>
  );
}

export default App;
