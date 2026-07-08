//What are generator functions?

//ntroduced in the ES6 version, generator functions are a special class of functions.

//They can be stopped midway and then continue from where they had stopped.

//Generator functions are declared with the function* keyword instead of the normal function keyword:

function* genFunc() {
    // Perform operation
}

//In normal functions, we use the return keyword to return a value and as soon as the return statement gets executed, the function execution stops:

function normalFunc() {
    return 22;
    console.log(2); // This line of code does not get executed
}

//In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.
function* genFunc() {
    yield 3;
    yield 4;
}
genFunc(); // Returns Object [Generator] {}