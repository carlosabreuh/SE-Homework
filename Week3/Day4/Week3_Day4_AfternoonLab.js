/* Create an Animal class. 
The class will have name, age, color, legs, superPower attributes
Create two objects of this class - both with a unique superPower
create three methods for this class - include one method named userSuperPower()
Create two objects for this class */

class Aminal {
    constructor(name, age, color, legs, superPower){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
    }
    
    // Three methods
    // superPower(){

    // }
    chew(){
        console.log("I chew everything!!");
    }
    play(){
        console.log("I play all the time!!");
    }
    run(){
        console.log("I run in the park!!");
    }
}

// Two objects

var obj1 = new Animal('Chloe','6months','Brown',4,'Chews everyting');
var obj2 = new Animal('kitto','6years','White',4,'Mail Destroyer');


class User{ 
    constructor(firstName, lastName, department){
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
    }
    
}