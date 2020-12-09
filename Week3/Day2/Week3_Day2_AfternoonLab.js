/* 1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers. Remove this imposter immediately and assign it to a new variable named `notHof` Console.log this new variable as well as the original list. */

// var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

// hof.pop();
// hof.push("notHof");

// console.log(hof);


/* 2. As head of McDonald's New Product Division, your job is to test and approve all new menu items. In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau". Remove these items from the list and console.log the updated testMenu.*/

// var testMenu = [
//   "McPizza Burger",
//   "McFly Burger",
//   "McLinguine",
//   "McChar-Siu Bau",
//   "McChop-Chae",
//   "McPancit",
// ];

// testMenu.splice(2, 2);

// console.log(testMenu);

/* 3. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. Console.log this new array.*/

// var westSide = ["Dre", "2Pac", "Snoop, "];
// var eastSide = ["Biggie", "Diddy", "Craig Mack"];

// var oneLove = [westSide + eastSide];

// console.log(oneLove);

/* 4 Some drama between you and the Kardashian's went down during last Saturday's potluck party. You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable. */

// var fbFriends = [
//   "Khalid",
//   "Yeezy",
//   "Kimmy K",
//   "Lamar Odom",
//   "Lebron",
//   "Warren Buffet",
// ];

// var unFriend = fbFriends.splice(1, 3);

// console.log(unFriend);

/* 5.  create a user profile using map where following keys. */

// let user1 = {
//   first_Name: "Carlos",

//   last_Name: "Abreu",

//   company: "PerScholas",

//   department: "Software Engineering",
// };

// console.log(user1);
    


/*  You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2. */


const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  for (var i in checkObj) {
    if (checkObj[i]>=2) {
      objToArray.push(checkObj[i]);
    }
  }

  /*7. Challenge: Objects - Iterating with a for loop:
https://csx.codesmith.io/units/precourse-part-2/challenge-objects-iterating-with-for-loop (Links to an external site.) */
const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  let divBy6 = false;
  // ADD CODE HERE
  const objToArray=Object.values(checkObj);
  for(var i=0; i<objToArray.length; i++)
    {
      if (objToArray[i]%6==0)
        divBy6=true;
    }
  
