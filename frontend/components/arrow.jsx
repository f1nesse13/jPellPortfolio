import React, { Component } from 'react'

class Arrow extends Component {

  render() {
    const { arrowDirection } = this.props
    const direction = arrowDirection === 'left' ? 'fa-arrow-alt-circle-left' : 'fa-arrow-alt-circle-right'
    return (
      <div>
        <i className={`fas ${direction}`}></i>
      </div>
    )
  }
}


export default Arrow