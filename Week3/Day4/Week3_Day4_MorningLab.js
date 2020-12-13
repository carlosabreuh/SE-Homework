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
class Nemo extends Fish {  //child class of class 'fish'
  constructor(color) {
    super(); //used to access the object's parent i.e 'FIRST-Class' aka 'Fish', must go before 'this.' attribute.
    this.color = color;
  }
}
let Nemoo = new Nemo("purple"); //Object of child class nemo.
Nemoo.name = 'Nemo'
console.log(Nemoo.name);
Nemoo.swim();
