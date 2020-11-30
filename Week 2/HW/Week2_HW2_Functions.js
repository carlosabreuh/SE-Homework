// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.


// function maxOfTwoNumbers(num1, num2) {
//     if(num1 < num2) {
//       console.log(num2);
//     } else {
//         console.log(num1)
//     } 
// }
// maxOfTwoNumbers(4, 2); 

//====Ternary Example of the function above.====

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator //

// function maxOfTwoNumbers(num1, num2) {
//     (num1 < num2) ? console.log(num2) : console.log(num1);
// } 
//     maxOfTwoNumbers(4, 2); 

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// function maxOfThreeNumbers(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3) {
//       console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//     } else { 
//         console.log(num3);
//     }
// }

// maxOfThreeNumbers(1000, 20, 10); 

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.                                                                

// var vowel = ['a', 'e', 'i', 'o', 'u']

// function isCharacterAVowel(vowels){
//     if(vowels === 'a'||vowels === 'e'||vowels === 'i' || vowels === 'o' || vowels === 'u'){
//         return "The character " + vowels + " is a vowel";
//     }
//     else{
//         return "The character " + vowels + " is NOT a vowel" ;
//     }
// }
//     console.log(isCharacterAVowel("z"));


//#4  Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var result = 0;

function sumArray(x) {
    x.forEach(elements => {
        result = result + elements; 

        
    });
}