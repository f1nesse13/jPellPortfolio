import React, { Component } from 'react';
import { Route } from 'react-router';
import NavBar from './components/navigation/navbar';
import IntroModal from './components/modal/intro_modal';

import Carousel from './carousel';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true, showPage: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // only shows intro modal on new sessions
    let bool;
    bool = window.sessionStorage.intro ? false : true;
    this.setState({ active: bool, showPage: !bool });
  }

  handleClick() {
    this.setState({
      active: false,
      showPage: true,
    });
    window.sessionStorage.intro = false;
  }

  render() {
    return (
      <div className="app_window">
        {this.state.active ? <IntroModal handleClick={this.handleClick} /> : ''}
        <Route path="/" component={NavBar} />
        {this.state.showPage ? <Carousel /> : ''}
        {this.state.active ? <div className="modal_bg" /> : ''}
      </div>
    );
  }
}

export default App;
