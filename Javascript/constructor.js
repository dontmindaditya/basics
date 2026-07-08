//What is the use of a constructor function in javascript?

//Constructor functions are used to create objects in javascript.

//When do we use constructor functions?

//If we want to create multiple objects having similar properties and methods, constructor functions are used.

//Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.

//Example:

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);

//In the code above, we have created a constructor function named Person. Whenever we want to create a new object of the type Person, We need to create it using the new keyword:

var person3 = new Person("Lilly", 17, "female");

//The above line of code will create a new object of the type Person. Constructor functions allow us to group similar objects.


//What is DOM?

//DOM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.
//When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.

//Which method is used to retrieve a character from a certain index?
//The charAt() function of the JavaScript string finds a char element at the supplied index. The index number begins at 0 and continues up to n-1, Here n is the string length. The index value must be positive, higher than, or the same as the string length.

// What do you mean by BOM?
//Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object.


//What is the distinction between client-side and server-side JavaScript?

//Client-side JavaScript is made up of two parts, a fundamental language and predefined objects for performing JavaScript in a browser. JavaScript for the client is automatically included in the HTML pages. At runtime, the browser understands this script.
//Server-side JavaScript, involves the execution of JavaScript code on a server in response to client requests. It handles these requests and delivers the relevant response to the client, which may include client-side JavaScript for subsequent execution within the browser