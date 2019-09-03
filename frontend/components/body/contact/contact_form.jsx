import React from 'react';
const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="contact-form" action="/contact" method="POST">
        <h1>Contact Me</h1>
        <input type="text" name="contact[name]" id="name" placeholder="Name" />
        <input
          type="text"
          name="contact[email]"
          id="email"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="contact[subject]"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          name="contact[body]"
          id="body"
          cols="30"
          rows="10"
          placeholder="Type your message here"
        ></textarea>

        <input type="submit" value="Send Message" />
        <p>
          Messages will be sent directly to me and I should reply within
          24-48hours
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
