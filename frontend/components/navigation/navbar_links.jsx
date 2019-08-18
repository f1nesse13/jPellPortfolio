import React, { Component } from "react";
import NavBarLinkItem from "./navbar_link_item";
// import { Route } from "react-router-dom";
class NavBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "Blog", "Projects", "Contact", "About"]
    };
  }

  render() {
    const { slideStatus } = this.props;
    const linksList = this.state.links.map((linkName, i) => (
      <NavBarLinkItem key={linkName} linkName={linkName} />
    ));

    return <ul className={`navbar_links ${slideStatus}`}>{linksList}</ul>;
    // <Route path="/" component={NavBarLinkItem} />;
  }
}

export default NavBarLinks;
