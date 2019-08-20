import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarLinkItem extends Component {
  constructor(props) {
    super(props);
    // checks if link is active for css styles
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {}

  // adds css class
  activeClass() {
    return this.state.isActive ? "active_link" : "";
  }

  render() {
    const { linkName } = this.props;

    return (
      <li>
        {/* creates link from array in parent class (navbarLinks) */}
        <NavLink
          activeClassName="active"
          className="nav_link"
          to={`/${linkName.toLowerCase()}/`}
        >
          {linkName}
        </NavLink>
      </li>
    );
  }
}

export default NavBarLinkItem;
