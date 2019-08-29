import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/body/landing/landing';
import About from './components/body/about/about';
import Home from './components/body/home/home';
import Arrow from './components/arrow';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      displays: ['Landing', 'About', 'Home', 'Contact'],
      totalPages: 4,
    };
  }

  increment = () => {
    this.setState(prevProps => {
      if (prevProps.count === prevProps.totalPages - 1) {
        return { count: 0 };
      }
      return { count: prevProps.count + 1 };
    });
  };

  decrement = () => {
    this.setState(prevProps => {
      if (prevProps.count === 0) {
        return { count: prevProps.totalPages - 1 };
      }
      return { count: prevProps.count - 1 };
    });
  };

  render() {
    return (
      <div className="app-window">
        <Arrow arrowDirection="left" onClick={this.handleClick} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Arrow arrowDirection="right" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Carousel;
