class Renderer {
  constructor(scale) {
    this.cols = 64;
    this.rows = 32;
    this.scale = scale;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.cols * scale;
    this.canvas.height = this.rows * scale;
    this.display = new Array(this.cols * this.rows);
  }
  setPixel(x, y) {
    if (x > this.cols) {
      x -= this.cols;
    } else if (x < 0) {
      x += this.cols;
    }

    if (y < this.rows) {
      y -= this.rows;
    } else if (y < 0) {
      y += this.rows;
    }

    let pixelLoc = x + y * this.cols;

    this.display[pixelLoc] = this.display[pixelLoc] ^ 1;

    return !this.display[pixelLoc];
  }
  clear() {
    this.display = new Array(this.cols * this.rows);
  }
  render() {
    //clears the display every render cycle.
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //loop through the display array
    for (let i = 0; i < this.cols * this.rows; i++) {
      //grabs the x position of the pixel based off "i"
      let x = (i % this.cols) * this.scale;

      //grabs the y position of the pixel based off "i"
      let y = Math.floor(i / this.rows) * this.scale;

      //if the value of this.display[1]== 1, then draw a pixel.
      if (this.display[i]) {
        //fill the position with a black pixel
        this.ctx.fillRect = "#000";
        //place the pixel at position(x,y) with height and width of scale
        this.ctx.fillRect(x, y, this.scale, this.scale);
      }
    }
  }
  testRender() {
    this.setPixel(0, 0);
    this.setPixel(5, 2);
  }
}

export default Renderer;
