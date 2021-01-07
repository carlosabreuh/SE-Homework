/* OOP - Classes: Model a vending machine
When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks -- 

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack */

class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let chips = new Snack("lays", 4);
let popcorn = new Snack("doritos", 2);
let sneakers = new Snack("candy", 1);
let food = [chips, popcorn, sneakers];

class VendingMachine {
  constructor(snacks) {
    this.snacks = snacks;
  }
  vend(x) {
    return this.snacks[x];
  }
}

vendingMachine = new VendingMachine(food);
console.log(vendingMachine.vend(1));
