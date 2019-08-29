import React, { Component } from "react";
import NavBar from "./components/navigation/navbar";
import { Route } from "react-router-dom";
import Home from "./components/body/home/home";
import About from "./components/body/about/about";
import IntroModal from "./components/modal/intro_modal";
import Landing from "./components/body/landing/landing";
import Arrow from './components/arrow'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "" };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // only shows intro modal on new sessions
    let bool;
    bool = window.sessionStorage.intro ? false : true;
    this.setState({ active: bool });
  }

  handleClick() {
    this.setState({
      active: false
    });
    window.sessionStorage.intro = false;
  }

  render() {
    return (
      <div className="app_window">
        {this.state.active ? <IntroModal handleClick={this.handleClick} /> : ''}
        <Arrow arrowDirection="left" />
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Arrow arrowDirection='right' />
        {this.state.active ? <div className="modal_bg" /> : ""}
      </div>
    );
  }
}

export default App;
