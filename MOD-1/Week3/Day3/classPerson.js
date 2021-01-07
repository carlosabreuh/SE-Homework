class Person {
    //fields
    constructor(firstName, lastName, country, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
    }


    //Methods
    greet (otherPerson){
    console.log("hi " + otherPerson + "!");

}

    walk(){
        console.log(("I Hate walking"));
    }
}

const carlos = new Person("Carlos", "Abreu", "USA", "NJ");
console.log(carlos);
carlos.firstName = "PerScholas"; // Object
console.log("Carlos");
carlos = "hi"; //problem if (const) no problem with (var) on line 22.

// someone.greet("Carlos");
// someone.walk();