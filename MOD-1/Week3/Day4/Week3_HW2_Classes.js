// 1 Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//     1 Write a function called circle_area that returns the area of the object. 
//     2 Write a function total_sides that returns the number of sides of the object.


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  circle_area() {
    // const mathPi = 3.14;
    console.log(Math.PI * Math.pow(this.radius,2));
  }
  total_sides() {
      console.log("Sides: 0");
  }
}

let circle = new Circle(5);
console.log(circle.circle_area());


// circle1.area();
// circle1.total_sides();
// let circle2 = new Circle(6);
// circle2.area();
// circle2.total_sides();


// // 2 Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// //     1 Write a function called rectangle_area that returns the area of the given object.
// //     2 Write a function total_sides that returns the number of sides of the object.


// class Rectangle {
//     constructor(lenght,width) {
//         this.lenght = lenght;
//         this.width = width;
//     }
//     rectangle_area() {
//         console.log("Area of rectangle: " + this.lenght * this.width);
//     }
//     total_sides(){
//         console.log(("Total sides of rectangle: 4"));
//     }
// }


// let rectangle1 = new Rectangle(6,3);
// rectangle1.rectangle_area();
// rectangle.total_sides();
// let rectangle2 = new Rectangle(4,2);
// rectangle.area();
// rectangle.total_sides();


// // 3 Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// //     1 Write a function called square_area that returns the area of the given object.
// //     2 Write a function total_sides that returns the number of sides of the object.

// class Square {
//     constructor(side){
//         this.side = side;
//     }
//     area(){
//         console.log("Area of the square: " + Math.pow(this.side,2));
//     }
//     total_sides(){
//         console.log("Total sides of square: 4");
//     }
// }

// let square1 = new Square(4);
// square1.area();
// square1.total_sides();
// let square2 = new Square(3);
// square2.area();
// square2.total_sides();