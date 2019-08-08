import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import App from "./app";

const Root = props => {
  return (
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
