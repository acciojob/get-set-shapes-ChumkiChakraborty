// Complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the Rectangle constructor with side as both width and height
  }

  getPerimeter() {
    return 4 * this._width; // Perimeter of a square is 4 times the side length
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
