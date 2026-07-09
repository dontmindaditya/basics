//What is the rest parameter and spread operator?

//Both rest parameter and spread operator were introduced in the ES6 version of javascript.

//Rest parameter ( … ):

    //It provides an improved way of handling the parameters of a function.
    //Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
    //Any number of arguments will be converted into an array using the rest parameter.
    //It also helps in extracting all or some parts of the arguments.
    //Rest parameters can be used by applying three dots (...) before the parameters.

function extractingArgs(...args){
  return args[1];
}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117
addAllArgs(1, 3, 4); // Returns 8

//Note- Rest parameter should always be used at the last parameter of a function:

// Incorrect way to use rest parameter
function randomFunc(a,...args,c){
//Do something
}

// Correct way to use rest parameter
function randomFunc2(a,b,...args){
//Do something
}

//Spread operator (…): Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];
let clonedArray1 = [...array1];
// Spreads the array into 3,4,5,6
console.log(clonedArray1); // Outputs [3,4,5,6]


let obj1 = {x:'Hello', y:'Bye'};
let clonedObj1 = {...obj1}; // Spreads and clones obj1
console.log(obj1);

let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

//Note- Key differences between rest parameter and spread operator:

    //Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
    //Rest parameter is used in function declaration whereas the spread operator is used in function calls
