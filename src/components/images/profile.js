import React from "react";
import placeholder from "./placeholder.jpg";
import ExampleComponent from "react-rounded-image";
import "../images/profile.css";

const ProfileImg = (props) => (
  <div className="profile_container">
    <div className="profile_image">
      <ExampleComponent
        image={placeholder}
        alt="profile image"
        roundedColor="211,211,211"
      />
    </div>
    <div className="Name">
      <h1>Aydn Hooper</h1>
    </div>
  </div>
);

export default ProfileImg;
