import React from "react";
import gitHub from "../images/GitHub-Mark-64px.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerMain">
      <footer className="footer">
        <div className="github">
          <a href="https://github.com/AydnH">
            {" "}
            <img src={gitHub} alt="git" />
          </a>
        </div>
        <div className="email">aydnhooper1997@gmail.com</div>
        <div className="contactlink">
          <a href="/#/Contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
