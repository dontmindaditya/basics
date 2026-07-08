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

//Scope Chain: JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
var y = 24;

function favFunction() {
    var x = 667;
    var anotherFavFunction = function () {
        console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }

    var yetAnotherFavFunction = function () {
        console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
    }

    anotherFavFunction();
    yetAnotherFavFunction();
}
favFunction();

//As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
//If the variable is not found in the global space as well, a reference error is thrown

// Explain Closures in JavaScript.

//Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

var Person = function (pName) {
    var name = pName;

    this.getName = function () {
        return name;
    }
}

var person = new Person("Neelesh");
console.log(person.getName());

//Let’s understand closures by example:

function randomFunc() {
    var obj1 = { name: "Vivian", age: 45 };

    return function () {
        console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed

    }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();

//Let’s understand the code above,

//The function randomFunc() gets executed and returns a function when we assign it to a variable:

var initialiseClosure = randomFunc();

//The returned function is then executed when we invoke initialiseClosure:

initialiseClosure();

//The line of code above outputs “Vivian is awesome” and this is possible because of closure.

console.log(obj1.name + " is " + "awesome");

//When the function randomFunc() runs, it seems that the returning function is using the variable obj1 inside it:

//Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.

//This ability of a function to store a variable for further reference even after it is executed is called Closure

//Mention some advantages of javascript.

//Javascript is executed on the client-side as well as server-side also. There are a variety of Frontend Frameworks that you may study and utilize. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS. It is currently the only JavaScript framework that may be used on the backend.
//Javascript is a simple language to learn.
//Web pages now have more functionality because of Javascript.
//To the end-user, Javascript is quite quick