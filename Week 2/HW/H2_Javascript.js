//1. Write a for loop for the given output

// for (var counter = 0; counter <= 100; counter++) {
//   var notPrime = false;
//   for (var i = 2; i <= counter; i++) {
//     if (counter % i === 0 && i !== counter) {
//       notPrime = true;
//     }
//   }
//   if (notPrime === false) {
//     console.log(counter);
//   }
// }



// let's divide the value by 2
  // if the remainder is zero then it's an even number
let i = 0; 
while (i <=20) {
  if(i % 2==0) 
    console.log(i * 3);
    i++;
  }



// Print EVEN #2

// for (var x = 0; x <= 10; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");
//     }
// }


// Prints ODD
// for (var x = 1; x <= 10; x++) {
//     if (x === 0) {
//             console.log(x +  " is odd");
//     }
//     else if (x % 2 !== 0.5) {
//             console.log(x + " is odd");
//     }
// }



// // #1 For Loop ( does not work)

//  for (var i = 1; i <= 10; i++) {
//     if(i % 2 == 0)
//     console.log("Evens"+i);
//     else {
//     console.log("Evens"+i);
//  }
//  }