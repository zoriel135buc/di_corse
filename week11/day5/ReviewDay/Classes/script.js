class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.area = () => {
      console.log(this.height * this.width);
    };
  }
}

const square = new Rectangle(10, 20);
// console.log(square);
const square1 = new Rectangle(1, 3);
// console.log(square1);
const square2 = new Rectangle(50, 10);
// console.log(square2);
// const square3 = new Rectangle(100, 200);
// console.log(square3);
// square.area();
// square1.area();
// square2.area();
