import React from "react";
import "./css/contact.css";
import ContactForm from "../components/contactform/contactform";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="Contactpage">
        <h1>Contact Me</h1>

        <ContactForm />
      </div>
    );
  }
}
