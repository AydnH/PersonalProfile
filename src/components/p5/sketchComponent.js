import React from "react";
import p5 from "p5";

export default class Sketch extends React.Component {
  constructor(props) {
    super(props);
    //p5 instance mode requires a reference on the DOM to mount the sketch
    //So we use react's createRef function to give p5 a reference
    this.myRef = React.createRef();
  }

  // This uses p5's instance mode for sketch creation and namespacing
  Sketch = (p) => {
    // Native p5 functions work as they would normally but prefixed with
    // a p5 object "p"

    var cellSize = 35;
    var grid = [];
    var xOffset = 0;
    var yOffset = 0;

    p.setup = () => {
      //Everyhting that normally happens in setup works
      p.createCanvas(p.displayWidth, p.displayWidth);
      var cols = p.displayWidth / 20;
      var rows = p.displayHeight / 20;

      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows - (i % 2); j++) {
          var cell = new Cell(i, j);
          grid.push(cell);
          console.log(cell);
        }
      }
    };

    p.draw = () => {
      // And everything that normally goes in draw in here
      p.background(18, 18, 18);
      for (var i = 0; i < grid.length; i++) {
        grid[i].show();
      }
    };

    p.polygon = (x, y, radius, npoints) => {
      var angle = p.TWO_PI / npoints;
      var alph = p.int(p.random(0, 50));
      p.noFill();
      p.stroke(221, 221, 221, alph);
      p.beginShape();
      for (var a = 0; a < p.TWO_PI; a += angle) {
        var sx = x + p.cos(a) * radius;
        var sy = y + p.sin(a) * radius;
        p.vertex(sx, sy);
      }
      p.endShape(p.CLOSE);
    };
    class Cell {
      constructor(i, j) {
        this.i = i;
        this.j = j;

        if (j % 2 === 0) {
          this.x = this.i * cellSize * 2 + xOffset;
        } else {
          this.x = this.i * cellSize * 2 + cellSize + xOffset;
        }

        this.y = this.j * cellSize * 1.7 + yOffset;

        this.show = function () {
          var alph = p.int(p.random(0, 17));
          p.stroke(211, 211, 211, alph);
          p.noFill();

          p.push();
          p.translate(this.x, this.y);
          p.rotate(p.radians(30));
          p.polygon(0, 0, cellSize, 6);
          p.pop();
        };
      }
    }
  };

  componentDidMount() {
    //We create a new p5 object on component mount, feed it
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      //This div will contain our p5 sketch
      <div ref={this.myRef}></div>
    );
  }
}
