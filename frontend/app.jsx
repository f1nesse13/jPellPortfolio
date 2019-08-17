import React, { Component } from "react";
import NavBar from "./components/navigation/navbar";
import { Route } from "react-router-dom";
import Home from "./components/body/home/home";
import About from "./components/body/about/about";
import IntroModal from "./components/modal/intro_modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  handleClick() {
    this.setState({
      active: false
    });
  }
  render() {
    return (
      <div className="app_window">
        {this.state.active ? (
          <IntroModal handleClick={this.handleClick.bind(this)} />
        ) : (
          ""
        )}
        <Route path="/" component={NavBar} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        {this.state.active ? <div className="modal_bg"></div> : ""}
      </div>
    );
  }
}

export default App;
