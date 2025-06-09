//  Q1. Area of Triangle :

// const a = 5;
// const b = 6;
// const c = 7;

// const s = (a+b+c)/2;
// const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// console.log("The area of triangle is: "+area.toFixed(2));

// Q5. Largest three no. 

// let a = 10;
// let b = 15;
// let c = 25;

// let largest;
// if(a>=b && a>=c){
//     largest = a;
// }
// else if(b>=a && b>=c) 
// {
//     largest = b;
// }
// else
// {
//     largest = c;
// }
// console.log("The largest no. is: " +largest);


// Q2. To calculate multiplication and division of two no.
// const prompt = require('prompt-sync')();

// let num1 = parseFloat((prompt("Enter the first number:")));
// let num2 = parseFloat((prompt("Enter the second number:")));


// let multiplication = num1 * num2;

// let division;
// if(num2 !== 0){
//     division = num1 / num2;
// }
// else{
//     division = "cannot divide by zero";
// }
// console.log("Multiplication of " +num1 + "and" +num2 + "is:" + multiplication);
// console.log("Division of " +num1 + "by" +num2 + "is:" + division);

// Q3. Temperature converter

// const prompt = require('prompt-sync')();
// let celsius = parseFloat(prompt("Enter temperature in celsius:"))
// let fahrenheitFromCelsius = (celsius * 9/5) + 32;
// console.log(celsius + "°C is " + fahrenheitFromCelsius + "°F");

// let fahrenheit = parseFloat(prompt("Enter temperature in fahrenheit:"))
// let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
// console.log(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");


// Q4. Absolute number difference

// const prompt = require('prompt-sync')();
// let number = parseFloat(prompt("Enter a number:"));
// let result ; 
// if(number>13){
//     result = 2 * Math.abs(number - 13);
// }
// else{
//     result = 13 - number;
// }
// console.log("Result:" +result);

// Q6. Total marks of a student

// const prompt = require('prompt-sync')();
// let marks = parseInt(prompt("Enter total marks (0-100):"));
// let isFinalExam = ("Is it a final exam? (yes/no): ").toLowerCase();
// let result;
// if (isFinalExam === "yes") {
//     result = (marks >= 90 && marks <= 100);
// } else {
//     result = (marks >= 89 && marks <= 100);
// }
// console.log("A+ Grade: " +result);