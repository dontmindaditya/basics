//Explain microtasks vs macrotasks with a real example

//JavaScript runs tasks using an event loop. Macrotasks include setTimeout and DOM events. Microtasks include Promises and queueMicrotask. Microtasks always run before the next macrotask. That’s why Promise callbacks execute earlier than setTimeout, even with zero delay.

Example: Promise.resolve().then(() => console.log("micro")); setTimeout(() => console.log("macro"), 0);