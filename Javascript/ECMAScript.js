//In ECMAScript 5, a new feature called JavaScript Strict Mode allows you to write a code or a function in a "strict" operational environment. In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.

//Characteristics of strict mode in javascript

//Duplicate arguments are not allowed by developers.
//In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
//The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
//Engineers will not be allowed to create global variables in 'Strict Mode.

//Explain Higher Order Functions in javascript.

//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
//Higher-order functions are a result of functions being first-class citizens in javascript

//Examples of higher-order functions:

function higherOrder(fn) {
    fn();
}

higherOrder(function () { console.log("Hello world") });

function higherOrder2() {
    return function () {
        return "Do something";
    }
}
var x = higherOrder2();
x()   // Returns "Do something"

//Explain “this” keyword.

//The “this” keyword refers to the object that the function is a property of.
//The value of the “this” keyword will always depend on the object that is invoking the function.\
// Let’s understand the above statements by examples:
function doSomething() {
    console.log(this);
}

doSomething();

//What do you think the output of the above code will be?

//Note - Observe the line where we are invoking the function.

//Check the definition again:

//The “this” keyword refers to the object that the function is a property of.

//In the above code, the function is a property of which object?

//Since the function is invoked in the global context, the function is a property of the global object.

//Therefore, the output of the above code will be the global object.Since we ran the above code inside the browser, the global object is the window object.
//Example 2:

var obj = {
    name: "vivek",
    getName: function () {
        console.log(this.name);
    }
}

obj.getName();

//In the above code, at the time of invocation, the getName function is a property of the object obj , therefore, this keyword will refer to the object obj, and hence the output will be “vivek”.

//Example 3:

var obj = {
    name: "vivek",
    getName: function () {
        console.log(this.name);
    }

}

var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName();

//Can you guess the output here? The output will be “akshay”.
//Although the getName function is declared inside the object obj, at the time of invocation, getName() is a property of obj2, therefore the “this” keyword will refer to obj2.
//The silly way to understand the “this” keyword is, whenever the function is invoked, check the object before the dot. The value of this . keyword will always be the object before the dot.
//If there is no object before the dot-like in example1, the value of this keyword will be the global object.

//Example 4:

var obj1 = {
    address: "Mumbai,India",
    getAddress: function () {
        console.log(this.address);
    }
}

var getAddress = obj1.getAddress;
var obj2 = { name: "akshay" };
obj2.getAddress();

//Can you guess the output?The output will be an error.Although in the code above, this keyword refers to the object obj2, obj2 does not have the property “address”‘, hence the getAddress function throws an error.

//What do you mean by Self Invoking Functions?
//Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.
//Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions

//Explain call(), apply() and, bind() methods

//1. call():

//It’s a predefined method in javascript.
//This method invokes a method (function) by specifying the owner object.

function sayHello() {
    return "Hello " + this.name;
}

var obj = { name: "Sandy" };

sayHello.call(obj);

// Returns "Hello Sandy"	

//call() method allows an object to use the method (function) of another object.
//Example 2:

var person = {
    age: 23,
    getAge: function () {
        return this.age;
    }
}
var person2 = { age: 54 };
person.getAge.call(person2);
// Returns 54  

//call() accepts arguments:

function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
saySomething.call(person4, "awesome");
// Returns "John is awesome" 

//apply()

//The apply method is similar to the call() method. The only difference is that,
//call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message) {
    return this.name + " is " + message;
}
var person4 = { name: "John" };
saySomething.apply(person4, ["awesome"]);

//bind():

//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
//Example with arguments:

var bikeDetails = {
    displayDetails: function (registrationNumber, brandName) {
        return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
    }
}

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

// Binds the displayDetails function to the person1 object


detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet

//What is the difference between exec () and test () methods in javascript?

// test () and exec () are RegExp expression methods used in javascript.
//We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
//We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'
