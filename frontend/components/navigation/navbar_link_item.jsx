import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBarLinkItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {}

  activeClass() {
    return this.state.isActive ? "active_link" : "";
  }

  render() {
    const { linkName } = this.props;

    return (
      <li>
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
