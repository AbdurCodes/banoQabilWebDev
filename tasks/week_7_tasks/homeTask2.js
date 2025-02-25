```
Home task 2


WHat are variables in javascript?
Variables are containers for storing data values. In JavaScript, variables are declared with the let keyword, the var keyword, or the const keyword. 
- The let keyword is used to declare variables that can be reassigned. 
- The const keyword is used to declare variables that cannot be reassigned. 
- The var keyword is an older way of declaring variables, and is not recommended for use in modern JavaScript code.



What are the rules for naming variables in javascript?
- Variable names must begin with a letter, an underscore (_), or a dollar sign ($)
- Variable names can contain letters, numbers, underscores, and dollar signs
- Variable names are case-sensitive
- Variable names cannot be reserved keywords (e.g., let, const, var, function, etc.)
- Variable names should be descriptive and meaningful



What are the different data types in javascript?
JavaScript has primitive and non-primitive data types:
Primitive data types:
- Number: represents numeric values
- String: represents textual data
- Boolean: represents true or false values
- Undefined: represents an undefined value
- Null: represents a null value
- Object: represents a collection of key-value pairs
- Symbol: represents a unique value
Non-primitive data types:
- Array: represents a list of elements
- Function: represents a function
- Date: represents a date and time
- RegExp: represents a regular expression
- Error: represents an error object
- Map: represents a collection of key-value pairs
- Set: represents a collection of unique values
- WeakMap: represents a collection of weakly held key-value pairs
- WeakSet: represents a collection of weakly held unique values



What is the difference between == and === in javascript?
- The == operator compares two values for equality, but performs type coercion if the values are of different types. For example, 1 == '1' is true because the string '1' is converted to the number 1 before comparison.
- The === operator compares two values for equality without performing type coercion. It checks both the values and the types of the values. For example, 1 === '1' is false because the values are of different types. 
- It is recommended to use the === operator for strict equality checks to avoid unexpected results due to type coercion. 



Convert '10' to a number in javascript.
You can convert a string to a number in JavaScript using the Number() function or the parseInt() function. For example:
let str = '10';
let num1 = Number(str); // using Number() function
let num2 = parseInt(str); // using parseInt() function
console.log(num1); // 10
console.log(num2); // 10



What will be the output of 5 + '5'?
The output of 5 + '5' in JavaScript will be the string '55'. 
When we use the + operator with a number and a string, JavaScript will convert the number to a string and concatenate the two strings together. In this case, the number 5 is converted to the string '5', and then concatenated with the string '5' to produce '55'.



What is the result of true && false?
The result of true && false in JavaScript is false.
The && operator is the logical AND operator, and it returns true if both operands are true, and false otherwise. In this case, the first operand is true and the second operand is false, so the result is false.



What is the difference between null and undefined?
- Null represents an intentional absence of any value, and is typically used to indicate that a variable has no value or that a value is explicitly set to null.
- Undefined represents an uninitialized or missing value, and is typically used to indicate that a variable has not been assigned a value.



what is the difference between alert, prompt and confirm?
- alert(): The alert() method displays an alert dialog with a message and an OK button. It is used to inform the user about something.
- prompt(): The prompt() method displays a dialog box that prompts the user for input. It takes two arguments: a message to display and an optional default value for the input field. It is used to get input from the user.
- confirm(): The confirm() method displays a dialog box with a message and OK and Cancel buttons. It is used to ask the user for confirmation before proceeding with an action.



Write a javascript code to swap two numbers?
let a = 5;
let b = 10;
let temp = a
a = b;
b = temp;
console.log('a:', a); // 10
console.log('b:', b); // 5






```