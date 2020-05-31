import React from "react";
import "./css/work.css";
import Gallery from "../components/gallery/gallerycontainer";

export default class Work extends React.Component {
  render() {
    return (
      <div id="workpage">
        <div className="heading">
          <h1>WORK</h1>
        </div>

        <div className="gallery">
          <Gallery />
        </div>
      </div>
    );
  }
}