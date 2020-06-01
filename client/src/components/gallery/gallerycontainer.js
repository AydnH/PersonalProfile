import React from "react";
import "./gallery.css";
import Wallpaper from "./galleryimages/wallpaperfinal.gif";
import Still1 from "./galleryimages/artwork_1.png";
import Still2 from "./galleryimages/artwork_2.png";
import Still3 from "./galleryimages/artwork_3.png";
import Alphabet from "./galleryimages/alphabet.jpg";
import github from "../images/GitHub-Mark-Light-64px.png";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery_main">
        <div className="gallery_container">
          <div className="wallpaper">
            <a href="https://gist.github.com/AydnH/f8925d94c783217e5f5024b501581a77">
              <img src={Wallpaper} alt="wallpaper" />
            </a>
          </div>
        </div>
        <div className="stills_container">
          <div className="still_1">
            <a href="https://gist.github.com/AydnH/d8b959b38706f0204639ffaec8da34fd">
              <img src={Still1} alt="still1" />
            </a>
          </div>
          <div className="still_2">
            <a href="https://gist.github.com/AydnH/d8b959b38706f0204639ffaec8da34fd">
              <img src={Still2} alt="still2" />
            </a>
          </div>
          <div className="still_3">
            <a href="https://gist.github.com/AydnH/d8b959b38706f0204639ffaec8da34fd">
              <img src={Still3} alt="still3" />
            </a>
          </div>
          <div className="alphabet">
            <a href="https://gist.github.com/AydnH/6deae0b79eef17991a43cd2816f497f3">
              <img src={Alphabet} alt="still4" />
            </a>
          </div>
        </div>
        <div className="gistLink">
          <a href="https://gist.github.com/AydnH">
            <img src={github} alt="ye" />
          </a>
        </div>
      </div>
    );
  }
}

export default Gallery;
