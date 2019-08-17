import React, { Component } from "react";
import NavBarLinks from "./navbar_links";
import { Route } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentWillMount() {
    this.setState({ active: false });
  }

  render() {
    return (
      <nav className="nav_bar">
        <header className="logo">
          finesse <span className="logo_designs">Designs</span>
        </header>
        <Route path="/" component={NavBarLinks} />
      </nav>
    );
  }
}

export default NavBar;
