//What is NaN property in JavaScript?

//NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
//typeof of NaN will return a Number.
//To check if a value is NaN, we use the isNaN() function,

//Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

//Explain passed by value and passed by reference.

//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//For understanding passed by value and passed by reference, we need to understand what happens when we create a variable and assign a value to it,
var x = 2;

//In the above example, we created a variable x and assigned it a value of “2”. In the background, the “=” (assign operator) allocates some space in the memory, stores the value “2” and returns the location of the allocated memory space. Therefore, the variable x in the above code points to the location of the memory space instead of pointing to the value 2 directly.

//Assign operator behaves differently when dealing with primitive and non-primitive data types,

var y = 234;
var z = y;

//In the above example, the assign operator knows that the value assigned to y is a primitive type (number type in this case), so when the second line code executes, where the value of y is assigned to z, the assign operator takes the value of y (234) and allocates a new space in the memory and returns the address. Therefore, variable z is not pointing to the location of variable y, instead, it is pointing to a new location in the memory.

var y = #8454; // y pointing to address of the value 234

var z = y;

var z = #5411; // z pointing to a completely new address of the value 234

// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z

//From the above example, we can see that primitive data types when passed to another variable, are passed by value. Instead of just assigning the same address to another variable, the value is passed and new space of memory is created.

//Assign operator dealing with non-primitive types:

var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;

//In the above example, the assign operator directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.

var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj2 = obj;

var obj2 = #8711; // obj2 pointing to the same address 

// changing the value of obj1

obj.name = "Akki";
console.log(obj2);

// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.

//From the above example, we can see that while passing non-primitive data types, the assigned operator directly passes the address (reference).

//Therefore, non-primitive data types are always passed by reference.

//What is an Immediately Invoked Function in JavaScript