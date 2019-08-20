import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <header className="hero">
        <h1 className="hero-title">
          Hi I'm <span>Joe</span>
        </h1>
        <h1>
          a <span>Software Developer</span>
        </h1>
        <p>I am a full-stack developer based out of Philadelphia, PA.</p>
        <p>
          Everything from web apps to websites development is my passion and I
          enjoy making peoples ideas come to life. I work with many different
          technologies but primarily with Rails and React. If you'd like to see
          some of my projects, contact me or hear a little about myself please
          follow the appropriate links. A blog will also be coming soon which Im
          very excited to share with you. Thanks for visiting!
        </p>
      </header>
    );
  }
}

export default Hero;
