const p5 = require("p5");

const s = (sketch) => {
  var displayWidth = window.innerWidth;
  var displayHeight = window.innerHeight;

  var cellSize = 35;
  var grid = [];
  var xOffset = 0;
  var yOffset = 0;

  sketch.setup = () => {
    sketch.Cell = () => {
      i = i;
      j = j;

      if (j % 2 === 0) {
        this.x = this.i * cellSize * 2 + xOffset;
      } else {
        this.x = this.i * cellSize * 2 + cellSize + xOffset;
      }

      this.y = this.j * cellSize * 1.7 + yOffset;
      this.hasPlayer = false;

      this.show = function () {
        var alph = sketch.int(sketch.random(0, 17));
        sketch.stroke(211, 211, 211, alph);
        sketch.noFill();

        sketch.push();
        sketch.translate(this.x, this.y);
        sketch.rotate(sketch.radians(30));
        polygon(0, 0, cellSize, 6);
        sketch.pop();
      };
    };
    sketch.createCanvas(displayWidth, displayHeight);
    var columns = displayWidth / 20;
    var rows = displayHeight / 20;

    for (i = 0; i < columns; i++) {
      for (j = 0; j < rows - (i % 2); j++) {
        var cell = new Cell(i, j);

        grid.push(cell);
      }
    }
  };

  sketch.draw = () => {
    sketch.background(18, 18, 18);
  };

  sketch.polygon = (x, y, radius, npoints) => {
    var angle = sketch.TWO_PI / npoints;
    sketch.beginShape();
    for (var a = 0; a < sketch.TWO_PI; a += angle) {
      var sx = x + sketch.cos(a) * radius;
      var sy = y + sketch.sin(a) * radius;
      sketch.vertex(sx, sy);
    }
    sketch.endShape(sketch.CLOSE);
  };
};

let myp5 = new p5(s);
