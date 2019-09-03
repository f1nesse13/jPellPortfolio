import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/body/landing/landing';
import About from './components/body/about/about';
import Home from './components/body/home/home';
import Blog from './components/body/blog/blog';
import Projects from './components/body/projects/projects';
import Contact from './components/body/contact/contact';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      displays: ['/', 'Home', 'Blog', 'Projects', 'Contact', 'About'],
      totalPages: 6,
      currentPage: 0,
    };
  }

  componentWillMount() {
    // initial state -
    this.setState({ currentPage: this.state.displays[this.state.count] });
  }

  increment = () => {
    this.setState(prevProps => {
      if (prevProps.count === prevProps.totalPages - 1) {
        window.location.hash = this.state.currentPage;

        return { count: 0, currentPage: this.state.displays[this.state.count] };
      }
      window.location.hash = this.state.currentPage;

      return {
        count: prevProps.count + 1,
        currentPage: this.state.displays[this.state.count],
      };
    });
  };

  decrement = () => {
    this.setState(prevProps => {
      if (prevProps.count === 0) {
        window.location.hash = this.state.currentPage;
        return {
          count: prevProps.totalPages - 1,
          currentPage: this.state.displays[this.state.count],
        };
      }
      window.location.hash = this.state.currentPage;
      return {
        count: prevProps.count - 1,
        currentPage: this.state.displays[this.state.count],
      };
    });
  };

  render() {
    const path = this.state.displays.indexOf(
      window.location.pathname.toString(),
    );
    return (
      <div className="content-window">
        <i
          className="arrows left-arrow fas fa-arrow-left"
          // Change path in window.location
          onClick={this.decrement}
        ></i>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <i
          className="arrows right-arrow fas fa-arrow-right"
          onClick={this.increment}
        ></i>
      </div>
    );
  }
}

export default Carousel;
