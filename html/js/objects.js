//object

//object setup:
// const user = {
//     name: "Vlad",
//     location: "Bay Area",
//     works: "NBA",
//     teams: [2,4,5,8],
// };

// //accessing the value 
// console.log(user.works) // dot notation 
// console.log(user['location']); //bracket notation
// console.log(user.teams)

// user.location = "Indiana";

// //adding new property

// console.log("user")


// console.log();
// console.log("Obj Exercise Key value pairs ");
// console.log();


//Objects Exercise»

/**
 * 
Objects Exercise»

For each of the exercises below, assume you are starting with the following programming object.

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://bit.ly/2ysFran"
};

    Write the command to add the language “Go” to the end of the languages array.
    Change the difficulty to the value of 7.
    Using the delete keyword, write the command to remove the jokes key from the programming object.
    Write the command to add a new key called isFun and a value of true to the programming object.


 * **/

// Objects Exercise»

// For each of the exercises below, assume you are starting with the following programming object.

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://bit.ly/2ysFran"
};

//     Write the command to add the language “Go” to the end of the languages array.
const addPushingGo = programming.languages.push("Go");
console.log(addPushingGo);

//     Change the difficulty to the value of 7.
const increaseDifficult = programming.difficulty = 7;
console.log(increaseDifficult);

//     Using the delete keyword, write the command to remove the jokes key from the programming object.
const deleteKeywordJokes = delete programming.jokes;
console.log(deleteKeywordJokes);
//     Write the command to add a new key called isFun and a value of true to the programming object.

const addKeyIsFun = programming.isFun = true;
console.log(addKeyIsFun);//

//create an object in two ways below: 

const newObject1 = {};

const newObject2 = new Object();

newObject1

//classes in Javascript constructor: 

// constructor function: User and give it pass parameter arguments name, age, location
// function User(name, age, location) {
//   this.name = name;//polymorphy
//   this.age = age;
//   this.location = location;

//   //create a variable 
//   const student = new User("Vlad", 25, "Bay Area");
//   const student2 = new User("MJ", 23, "Chicago");
// }
// // console.log(student.name)
// // console.log(student.name)
// // console.log(studemt.location)
// student.name;
// student.age;
// studemt.location;


// student2.name;
// student2.age;
// studemt2.location;


class Student {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
}

const student3 = new Student("Vlad", 25, "Georgia");

student3.name;


