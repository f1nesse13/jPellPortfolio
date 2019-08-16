import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>About Me</h1>
        <p>
          I am a 32 year old full-stack developer working with mostly Rails and
          React. Although they are the main technologies I use for web
          applications I use some Ruby for scripting and have some prior
          experience with nodejs for backend programming. Some other tools I am
          familiar with are SQL, NoSQL databases such as postgres, SQLite and
          mongoDB. I also have experience with consuming as well as creating
          RESTful APIs.
        </p>
        <p>
          I've been writing code on and off since high school and have always
          had a passion for it. I decided to follow a career in the automotive
          industry which turned into a job in management. This gave me many
          skills that still assist me to this day. Although I enjoyed my work I
          made the decision to stay home when my first child was born. As time
          has gone on I've sharpened my skills and began taking development more
          seriously, consuming information from every source I could find.
          Development really draws me in and allows me to be creative, at times
          it is hard for me to tear myself away. I am a a great problem solver
          and love to be challenged.
        </p>
      </section>
    );
  }
}

export default About;
