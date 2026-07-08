//6. Explain Implicit Type Coercion in javascript.

//Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.
//    String coercion

//String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

//Example 1:

var x = 3;
var y = "3";
x + y // Returns "33" 

//Example 2:

var x = 24;
var y = "Hello";
x + y   // Returns "24Hello"; 

//Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht" 

//Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.
var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type

//    Boolean Coercion

//Boolean coercion takes place when using logical operators, ternary operators(let isAdult = age >= 18 ? "Yes" : "No"), if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

//Truthy values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false.

//All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values. 

//If statements:

//Example:

var x = 0;
var y = 23;

if (x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  

if (y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

//    Logical operators:

//Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

//OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

//AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.
var x = 220;
var y = "Hello";
var z = undefined;

x | | y    // Returns 220 since the first value is truthy

x | | z   // Returns 220 since the first value is truthy

x && y    // Returns "Hello" since both the values are truthy

y && z   // Returns undefined since the second value is falsy

if (x && y) {
    console.log("Code runs"); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
    console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

//Equality Coercion
//Equality coercion takes place when using ‘ == ‘ operator. As we have stated before
//The ‘ == ‘ operator compares values and not types.
//While the above statement is a simple way to explain == operator, it’s not completely true
//The reality is that while using the ‘==’ operator, coercion takes place.
//The ‘==’ operator, converts both the operands to the same type and then compares them.

//Example:

var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

//Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.

var a = 226;
var b = "226";

a === b // Returns false because coercion does not take place and the  operands are of different types. Hence they are not equal.

