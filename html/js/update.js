const users = [{ id: 1, initial: "A" }, { id: 2, initial: "B" }, { id: 3, initial: "C" }];

const newArr = users.map(user => {
    if (user.id === 2) {
        user.initial = "E";
    }
    return user;
});
// local storage:

//set items
// localStorage.setItem("users", JSON.stringify(newArr)); // transforming an array into string 

// // retrieve items
// console.log(JSON.parse(localStorage.getItem("users"))); // use JSON to transform the string into an Array

// when parsing the data we are using the return the list of card for the NBA Player
// When we have to update the data and when we have to append the data to the Dom. 
//print 
// { id: 1, initial: 'A' },
// { id: 2, initial: 'E', location: 'Chicago' },
// { id: 3, initial: 'C' }


// copying values: means storage primitive value into a new variable and the new variable will maintain its value

let myName = "Vlad";

const newName = myName;

myName = "Brian";


// with an array: 

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr; // what ever changes to the num Array it will be reflected into the new array

numArr[1] = 6;

// Primitive types:  Strings, Boolean, Float, Null, Undefined
// Only makes copy of primitive value

let myName2 = 'Donte';
const newName2 = myName2;

myName2 = "Vlad"

console.log("Are the names equal: ", myName2 === newName2) //Are the names equal:  false
//reference - arrays, objects, functions

// using arrays: 

const ogArr = ["A", "B", "C", "D"];
const copyArr = ogArr;

// when doing the console.log() include the some message inside and the value: 
console.log("Copy Array: ", copyArr) // Copy Array:  [ 'A', 'B', 'C', 'D' ]

// reference and primitive type:



// use const with the arrays since are mutables: 

const locationArray = [{ id: 1, location: "California" }, { id: 2, location: "Denver" }, { id: 3, location: "NY" },]

let changeLocation = 2;

let newLocationArray = users.map(user => {
    if (user.id === changeLocation) {
        user.location = "Chicago";
    }
    //return each time the new user
    return user;
});

console.log(newLocationArray)