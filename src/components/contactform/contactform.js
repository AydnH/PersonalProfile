import React from "react";
import "./contactform.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="ContactForm_Master">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
              placeholder="full name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              placeholder="message"
            />
          </div>
          <div className="button">
            <button type="submit" className="btn-primary">
              send it
            </button>
          </div>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default ContactForm;
