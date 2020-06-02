import React from "react";
import "./nav.css";

const NavBar = (props) => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div></div>
      {/* i was going to use an image as the home page link but decided not to didnt change the name but still does its job */}
      <div className="navbar_logo">
        <a href="/#/Home">Home</a>
      </div>
      <div className="navbar_navigation_items">
        <ul>
          <li>
            <a href="/#/Work">Gallery</a>
          </li>
          <li>
            <a href="/#/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
