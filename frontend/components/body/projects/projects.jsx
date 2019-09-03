import React, { Component } from 'react';

class Projects extends Component {
  state = {
    project_list: {
      title: 'Barking Spyder Pro Shop',
      image: 'url here',
      details: 'yada yada',
    },
  };
  render() {

    this.state.project_list.map(project => <Project name={}/>)
    return <div>Projects</div>;
  }
}

export default Projects;
