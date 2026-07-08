//What is currying in JavaScript?
//Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments

//Example of a curried function:
function add(a) {
    return function (b) {
        return a + b;
    }
}

add(3)(4)

//For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).
//By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

function multiply(a, b) {
    return a * b;
}

function currying(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        }
    }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12

//As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply , which takes in one parameter at a time.

//What are some advantages of using External JavaScript?

//External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <head> or <body> element of the HTML file where the code is to be placed. 
//Some advantages of external javascript are

//It allows web designers and developers to collaborate on HTML and javascript files.
//We can reuse the code.
//Code readability is simple in external javascript.

//Explain Scope and Scope Chain in javascrpt?

//Scope in JS determines the accessibility of variables and functions at various parts of one’s code.

//In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.

//There are three types of scopes in JS:

//Global Scope
//Local or Function Scope
//Block Scope

//Global Scope: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.

var globalVariable = "Hello world";

function sendMessage() {
    return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2() {
    return sendMessage(); // Can access sendMessage function since it's written in global space
}
sendMessage2();  // Returns “Hello world”

//Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.

function awesomeFunction() {
    var a = 2;

    var multiplyBy2 = function () {
        console.log(a * 2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

//Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.
{
    let x = 45;
}

console.log(x); // Gives reference error since x cannot be accessed outside of the block

for (let i = 0; i < 2; i++) {
    // do something
}

console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block