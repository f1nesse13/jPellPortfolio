import React from "react";
import NavBar from "./components/navigation/navbar";
import { Route } from "react-router-dom";
import Home from "./components/body/home/home";

const App = props => {
  return (
    <div className="app_window">
      <Route path="/" component={NavBar} />
      <Route exact path="/home" component={Home} />
    </div>
  );
};

export default App;
