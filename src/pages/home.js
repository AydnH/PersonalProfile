import React from "react";
import ProfileImg from "../components/images/profile";
import "./css/home.css";
import About from "../components/blurb";
import Skills from "../components/textblock";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="page_body">
          <div className="image">
            <ProfileImg />
          </div>
          <br />
          <br />
        </div>
        <div></div>
        <div className="about">
          <About />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="contact">
          CONTACT ME HERE
          <br />
          aydnhooper1997@gmail.com
          <br />
          <br />
          OR HERE
          <br />
          <br />
        </div>
        <div className="link">
          <a href="/#/Contact">CONTACT</a>
        </div>
      </div>
    );
  }
}
