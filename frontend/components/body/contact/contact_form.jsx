import React from "react";
const ContactForm = () => {
  return (
    <form action="/contact" method="POST">
      <input type="text" name="contact[from]" id="from" />
      <input type="text" name="contact[subject]" id="subject" />
      <textarea name="contact[body]" id="body" cols="30" rows="10"></textarea>
    </form>
  );
};

export default ContactForm;
