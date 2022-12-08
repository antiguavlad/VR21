// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// /**
//  * 
//  * 
//  * Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// To learn about the way promises work and how you can use them, we advise you to read Using promises first.
// Description

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Flowchart showing how the Promise state transitions between pending, fulfilled, and rejected via then/catch handlers. A pending promise can become either fulfilled or rejected. If fulfilled, the "on fulfillment" handler, or first parameter of the then() method, is executed and carries out further asynchronous actions. If rejected, the error handler, either passed as the second parameter of the then() method or as the sole parameter of the catch() method, gets executed. 

// **/

// //Promises

// function myFunction() {
//     console.log("Hello 1");
//     setTimeout(() => {
//         console.log("Hello 2");
//     }, 3000);
//     console.log("Hello 3");
// }

// console.log(myFunction());


// const myPromise = new Promise((resolveOuter) => {
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         })
//     );
// });

// const myPromise2 = Promise((resolve) => {
//     resolve("Hello World")
// });

// myPromise.then(val => console.log(valueOf))


// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My data is resolved"); // resolve is a function

//     }, 3000)// this represent 3 secs the delay in response from the server

// });

// // we cannot get the data until it fullfill
// // to get the answer from the promise we use the .then to get the data from the resolver("My data is resolved")
// myPromise3.then(data => {
//     //append some data to the DOM:
//     console.log("Then data: ", data);
// }).catch(e => {
//     debugger;
//     throw new Error(e);
// });


//promises under the hood: 


// const myPromise4 = new Promise((resolve, reject) => {
//     resolve("My resolver function");
// });

// myPromise4.then(data => {
//     console.log(data)
// });

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))




