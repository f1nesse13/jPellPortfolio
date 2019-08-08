import React, { Component } from "react";

class IntroModal extends Component {
  render() {
    return (
      <div className="modal_bg">
        <div className="modal">
          <h1>Welcome to finesseDesigns</h1>

          {/* <img src="placeholder" alt=""/> */}

          <p>
            Please note this page uses Javascript and it should be enabled to
            properly view this site. It is <span>best</span> viewed on a laptop
            with a width of 900px or greater - any screen will do.
          </p>

          <button onClick={this.props.handleClick} type="submit">
            Ok
          </button>
        </div>
      </div>
    );
  }
}

export default IntroModal;
