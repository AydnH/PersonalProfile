import React from "react";
import axios from "axios";
import "./contactform.css";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
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
  validateEmail() {
    let errors = {};
    if (!this.state.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validateEmail();
    this.onSubmit = () => ({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(data);
    axios
      .post("http://localhost:3100/api/post", data)
      .then((res) => {
        this.setState({ sent: true });
      })
      .catch(() => {
        console.log("Message Failed");
      });
    this.setState({
      name: "",
      email: "",
      message: "",
    });
    console.log(this.state);
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
}
