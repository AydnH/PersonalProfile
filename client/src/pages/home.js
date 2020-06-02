import React from "react";
import ProfileImg from "../components/images/profile";
import "./css/home.css";
import About from "../components/blurb";
import Skills from "../components/textblock";
import github from "../components/images/GitHub-Mark-Light-64px.png";
//home page uses components inside divs for content syling is done for each component then posittioning of components is controled in home css  file
export default class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="page_body">
          <section className="profile_section">
            <div className="image">
              <ProfileImg />
            </div>
          </section>

          <section className="about_section">
            <div className="about">
              <About />
            </div>
          </section>
          <section className="skill_section">
            <div className="skills">
              <Skills />
            </div>
          </section>
          {/* i could have made this contact section its own component but it was just as easy to put it in here not as effecient but still works */}
          <section className="contact_section">
            <div className="contact">
              CONTACT ME
              <br />
              <br />
              aydnhooper1997@gmail.com
              <br />
              <br />
              <div className="link">
                <a href="/#/Contact">OR HERE</a>
              </div>
              <br />
              CHECK OUT MY GITHUB
            </div>
          </section>

          <div className="github">
            <a href="https://github.com/AydnH">
              <img src={github} alt="meaningful text" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
