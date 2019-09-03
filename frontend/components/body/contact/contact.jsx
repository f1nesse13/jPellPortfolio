import React, { Component } from 'react';
import ContactForm from './contact_form';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="contact">
        <ContactForm />
      </section>
    );
  }
}

export default Contact;
