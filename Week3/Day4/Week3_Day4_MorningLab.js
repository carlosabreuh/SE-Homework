// Create a class called Fish 
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim? 
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class? 

// class Fish {
//   constructor() {}
//   swim() {
//     console.log("I can Swim");
//   }
// }

// class Nemo extends Fish {
//   constructor(color) {
//     this.color = color;
//   }
// }

// let Nemo1 = new Nemo ("purple");
// console.log(Nemo1.swim());

class Fish {
  constructor() {}
  swim() {
    console.log("I can swim");
  }
}
class Nemo extends Fish {
  constructor(color) {
    super();
    this.color = color;
  }
}
var Nemoo = new Nemo("purple");
Nemoo.swim();
