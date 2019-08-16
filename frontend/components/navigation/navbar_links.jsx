import React, { Component } from "react";
import NavBarLinkItem from "./navbar_link_item";
import { Route } from "react-router-dom";
import { Hash } from "crypto";
class NavBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "Blog", "Projects", "Contact", "About"]
    };
  }

  render() {
    const linksList = this.state.links.map((linkName, i) => (
      <NavBarLinkItem key={linkName} linkName={linkName} />
    ));

    return <ul className="navbar_links">{linksList}</ul>;
    // <Route path="/" component={NavBarLinkItem} />;
  }
}

export default NavBarLinks;
