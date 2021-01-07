var a = 0;
var b = 0;
var c = 0;

function add() { 
    var num1 = Number(document.getElementById("arg1").value) ;
    var num2 = Number(document.getElementById("arg2").value) ;
    var result = num1+num2;
    document.getElementById("arg3").value = result;// The function derives the sum of num1 and num2
 }

function subtract() {
    var num1 = document.getElementById("arg1").value ;
    var num2 = document.getElementById("arg2").value ;
    var result = parseInt(num1)-parseInt(num2);
    document.getElementById("arg3").value = result;// The function derives the difference of num1 and num2
}

function multiply() {
    var num1 = document.getElementById("arg1").value ;
    var num2 = document.getElementById("arg2").value ;
    var result = parseInt(num1)*parseInt(num2);
    document.getElementById("arg3").value = result;  // The function derives the product of num1 and num2
}

function divide() {
    var num1 = document.getElementById("arg1").value ;
    var num2 = document.getElementById("arg2").value ;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById("arg3").value = result;   // The function derives the division of num1 and num2
}

function avg() {
    var num1 = document.getElementById("arg1").value ;
    var num2 = document.getElementById("arg2").value ;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById("arg3").value = result;   // The function returns the average of num1 and num2
}

//create script to get all values and input into array