//. What is the use of promises in javascript?

//Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle asynchronous code can lead to unmanageable code.

//Promise object has four states -

//Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
//Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
//Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
//Settled - This state represents that the promise has been either rejected or fulfilled.

//A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.
//resolve = go to next action
//reject = go to error handling action

//resolve is a function that will be called when the async operation has been successfully completed.
//reject is a function that will be called, when the async operation fails or if some error occurs.
