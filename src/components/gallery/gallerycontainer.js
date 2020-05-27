import React from "react";
import "./gallery.css";
import Wallpaper from "./galleryimages/wallpaperfinal.gif";
import Still1 from "./galleryimages/artwork_1.png";
import Still2 from "./galleryimages/artwork_2.png";
import Still3 from "./galleryimages/artwork_3.png";
import Alphabet from "./galleryimages/alphabet.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery_main">
        <div className="gallery_container">
          <div className="wallpaper">
            <img src={Wallpaper} alt="wallpaper" />
          </div>
        </div>
        <div className="stills_container">
          <div className="still_1">
            <img src={Still1} alt="still1" />
          </div>
          <div className="still_2">
            <img src={Still2} alt="still2" />
          </div>
          <div className="still_3">
            <img src={Still3} alt="still3" />
          </div>
          <div className="alphabet">
            <img src={Alphabet} alt="still4" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
