
// Weekly Assignment 1



// Task 1: Variables declaration and usage
const name = "Abdur Rehman";
let age = 37;
let isStudent = true;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);



// Task 2: type conversion
let myStr = "100";
let myNum = Number(myStr);
let myStr2 = "true";
let myBool = Boolean(myStr2);
console.log("String to Number: " + typeof myNum);
console.log("String to Boolean: " + typeof myBool);



// Task 3: Arithmetic operations
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
alert("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
alert("The difference of " + num1 + " and " + num2 + " is " + (num1 - num2));
alert("The product of " + num1 + " and " + num2 + " is " + (num1 * num2));
alert("The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2));
alert("The remainder of " + num1 + " and " + num2 + " is " + (num1 % num2));



// Task 4: Null vs Undefined
let score = null;
let grade;
console.log("Null: " + score);
console.log("Undefined: " + grade);
// Difference between null and undefined: 
// Null is a value that is assigned to a variable to indicate that the variable is empty or has no value. While Undefined is a type that is automatically assigned to a variable that has been declared but not yet assigned a value.




// Task 5: Logical operators
let boolVal1 = Boolean(prompt("Enter first boolean value: "));
let boolVal2 = Boolean(prompt("Enter second boolean value: ")); // "false" is a truthy value
let boolVal1ORboolVal2 = boolVal1 || boolVal2;
alert("boolVal1 OR boolVal2: " + boolVal1ORboolVal2);
let boolVal1ANDboolVal2 = boolVal1 && boolVal2;
alert("boolVal1 AND boolVal2: " + boolVal1ANDboolVal2);
let NOTboolVal1 = !boolVal1;
let NOTboolVal2 = !boolVal2;
alert("NOT boolVal1: " + NOTboolVal1);
alert("NOT boolVal2: " + NOTboolVal2);