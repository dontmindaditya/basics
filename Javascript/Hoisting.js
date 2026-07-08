//Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

//This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

//Example 1:

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

//Example 2:

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction() {
    console.log(" Hello world! ");
}

//Example 3:

// Hoisting takes place in the local scope as well
function doSomething() {
    x = 33;
    console.log(x);
    var x;
}

//    Note - Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

//Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
x = 23; // Gives an error since 'x' is not declared
var x;

//3. Why do we use the word “debugger” in javascript?
//The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

//4. Difference between “ == “ and “ === “ operators.
//Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and typesExample:

var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
    (x === y) // Returns false since the typeof x is "number" and typeof y is "string"

//5. Difference between var and let keyword in javascript.

//Some differences are

//From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
//The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
//In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

//6. Explain Implicit Type Coercion in javascript.

//Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.
//    String coercion

//String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

