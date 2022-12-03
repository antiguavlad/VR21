
console.log()
console.log("Arrays: ...")
console.log()

//run time of an array is: O(n)
const cars = ["BMW","KIA", "TOYOTA","HONDA","BUICK","HYUNDAI",];
console.log(cars[2]);

console.log("2D array");

const twoDarray = [[1,2,3],[4,5,6],[789]];
console.log(twoDarray[2][1]);

//name notation:
const nameObjArr = [{name:"Donte"}, {name:"sugey"}, {name: "Stephanie"}];
console.log(nameObjArr[1].name);

console.log();
console.log("Concatenation");


console.log();
console.log("find");
console.log();

const arrofNums = [1,2,3,4,5,6];
const found = arrofNums.find(num => num > 3);
console.log(found);



console.log();
console.log("Concatenation");


console.log();
console.log("reduce");
console.log();

// const arrofNums2 = [1,2,3,4,5,6];
// const found2 = arrofNums2.reduce((acc,cerr) => acc + curr);
// console.log(found2);


console.log();
console.log("IndexOf");
console.log();

const arrofNums3 = [1,2,3,4,5,6];
const found3 = arrofNums3.indexOf(2);
console.log(found3);



console.log();
console.log("Array is the most used data structure in Javascript ");
console.log();

const myArr = ["data 1 ", 3, true];
console.log(myArr)

myArr[0];

console.log();
console.log("Exercise");
console.log();

const people = ["Jordan", "Lebron", "Vlad"]
people.shift();
console.log(people);

/**
 * 
Array Exercises»

For each of the exercises below, assume you are starting with the following people array.

const people = ["Greg", "Mary", "Devon", "James"];

    Write the command to remove “Greg” from the array.
    Write the command to remove “James” from the array.
    Write the command to add “Matt” to the front of the array.
    Write the command to add your name to the end of the array.
    Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
    Write the command that gives the indexOf where “Mary” is located.
    Write the command that gives the indexOf where “Foo” is located (this should return -1).
    Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
    Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.
 * 
 * **/

console.log("Assignment Arrays ");

console.log();
console.log("Exercise");
console.log();

const people2 = ["Greg", "Mary", "Devon", "James"];


//Write the command to remove “Greg” from the array.
people2.shift();
console.log(people2);

// Write the command to remove “James” from the array.
people2.pop();
console.log(people2);

// Write the command to add “Matt” to the front of the array.
people2.unshift();
console.log(people2);

// Write the command to add your name to the end of the array.
people2.push("Vlad");
console.log(people2);

// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
people2.slice(2);
console.log(people2);

// Write the command that gives the indexOf where “Mary” is located.
people2.indexOf("Mary");
console.log(people2);

// Write the command that gives the indexOf where “Foo” is located (this should return -1).
people2.indexOf("Foo");
console.log(people2);

// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
let people3 = ["Greg", "Mary", "Devon", "James"];
people3.splice(2,1,"Elizabeth", "Artie")
console.log(people2);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.
let withBob = people3.concat("Bob");
console.log(people3);


