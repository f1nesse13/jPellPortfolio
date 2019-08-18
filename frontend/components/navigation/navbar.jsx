import React, { Component } from "react";
import NavBarLinks from "./navbar_links";
import { Route } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { slide: true };
  }

  handleClick() {
    this.setState({
      slide: !this.state.slide
    });
  }

  render() {
    const { showLinks, slide } = this.state;
    let slideStatus = slide ? "slideIn" : "slideOut";
    let hamburgerStyle = slide ? "hamburgerStyle" : "";
    return (
      <nav className="navbar">
        <div className="links_container">
          <i
            className={`fas fa-bars ${hamburgerStyle}`}
            onClick={this.handleClick.bind(this)}
          ></i>
          <NavBarLinks slideStatus={slideStatus} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
