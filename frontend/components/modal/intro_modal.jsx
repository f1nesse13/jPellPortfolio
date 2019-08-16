import React, { Component } from "react";

class IntroModal extends Component {
  render() {
    return (
      <div className="modal_container">
        <div className="modal">
          <h1>
            finesse<span className="modal_span">Designs</span>
          </h1>
          <p>
            Please note this page uses Javascript and should be enabled to
            properly view this site and have the best experience. Thanks for
            visiting!
          </p>

          <button onClick={this.props.handleClick} type="submit">
            Continue to page
          </button>
        </div>
      </div>
    );
  }
}

export default IntroModal;
