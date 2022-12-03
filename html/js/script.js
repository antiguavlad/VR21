// console.log("Are you really sure I am Linked?")

// const myName = "Vlad";
// console.log("My name ", myName);

// const number = 9;
// console.log("Type of number: ", typeof number)

// const isLoggedIn = true;
// console.log("Is logged in:", isLoggedIn)


// const name1 = "Vlad"
// const age1 = 30
// const location4 = "Bay Area"
// console.log("My name is... " + " "+ name1 + " " + ". I am " + age1 + " and I live in: " + location4)


// const name = "Vlad"
// const age = 30
// const location3 = "Bay Area"
// console.log(`My name is ${name} I am ${age} and I live in ${location3}`) // result:   My name is Vlad I am 30 and I live in Bay Area


// // Strings:

// console.log("Vladimir Antigua".length) // 16
// console.log("Vladimir , Antigua".split(",")) //['Vladimir ', ' Antigua']
// console.log("Vladimir Antigua".substring(3)) //dimir Antigua
// console.log("Vladimir Antigua".substring(6,8)) //ir
// console.log("Vladimir Antigua".startsWith("A")) //false
// console.log("Vladimir Antigua".startsWith("V")) //true


// console.log("Vladimir Antigua".slice(6)) //false



// let string = "Vladimr Antigua";
// console.log(string);

// let ch = '2';
// console.log(ch);


// let x = 10;
// let y = 20;


// let z = x + y;

// console.log(z);



// let x2 = 20;
// let y2 = 5;


// let z2 = x2 - y2;

// console.log(z2);


// let x3 = -5.2;
// let y3 = 2.5;

// let z3 = x3 - y3;

// console.log(z3);

// let x4 = 1 + "1";

// console.log(x4);
// typeof x4;


// let x5 = 20;
// let y5 = 5;


// let z5 = x5 * y5;

// console.log(z5);



// let x6 = 20;
// let y6 = 5;

// // Divide y into x to get the quotient
// let z6 = x6 / y6;

// console.log(z6);

// //Exponentiation:
// let x8 = 10; 

// let y8 = 5;

// let z8 = x8 ** y5;

// console.log(z8) //100000

// //Exponentiation:
// let x9 = 10; 

// let y9 = 5;

// let z9 = x9 / y9;

// console.log(z9) //5


// // Set a variable
// let x10 = 7;

// // Use the prefix increment operation
// let increment = ++x10;

// console.log(increment);

// // Run a loop ten times
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }


//   // Assign 27 to age variable
// let age2 = 27;

// age2 += 3;

// console.log(age2);

// // First multiply 3 by 5, then add 10
// 10 + 3 * 5;

// // First add 10 and 3, then multiply by 5
// (10 + 3) * 5;

// const sentence = "I am new to learning JavaScript";

// console.log(sentence.slice(0,8));
// console.log(sentence.slice(-31,-21));

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]


// // if statement: \

// const userAge = prompt("How old are you?" );
// if (userAge > 21){
//    console.log("you can enter the club......! :) ")
// } else {
//   console.log("Go HOME and nite nite :( ")

// }

// functions:
console.log();

//function declaration:
function writeMyNameDeclaration(){
  console.log("My name is Vlad --- function declaration");
  console.log("My last name is Antigua --- function declaration");

}

//calling the function: 
writeMyNameDeclaration();

console.log();

// assigning a variable to the function called a function expression
const writeMyNameFunctionExpression = function (){
  console.log("My name is Vlad - Function Expression ");
  console.log("My last name is Antigua - Function Expression ");

}

//calling the function: 
writeMyNameFunctionExpression();


console.log();

//using the return in a fuction


console.log();

//function declaration using return:
function writeMyNameDeclarationWITHRETURN(){
  // console.log("My name is Vlad --- function declaration with return");
  // console.log("My last name is Antigua --- function declaration with return");
  return "My last name is Antigua --- function declaration with return";

}

//calling the function: 
writeMyNameDeclarationWITHRETURN();

console.log();


console.log();

// assigning a variable to the function called a function expression
const writeMyNameFunctionExpressionUsingRETURN = function (){
  // console.log("My name is Vlad - Function Expression with return ");
  // console.log("My last name is Antigua - Function Expression with return");

  return "My name is Vlad - Function Expression with return ";
}

//calling the function: 
writeMyNameFunctionExpressionUsingRETURN();


console.log();

// fucntion with a parameter

// assigning a variable to the function called a function expression
const writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERS = function (name){
  // console.log("My name is Vlad - Function Expression with return ");
  // console.log("My last name is Antigua - Function Expression with return");

  return `My name is ${name} - Function Expression with return`;
}

//calling the function: 
const printName = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERS("JORDAN OR BRON");


console.log(printName);


console.log()

// fucntion with a parameter -- short circuiting by checking if the person entered the name by using the if statement to see
// if they are suing the right data

// assigning a variable to the function called a function expression
const writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit = function (name){
  // console.log("My name is Vlad - Function Expression with return ");
  // console.log("My last name is Antigua - Function Expression with return");
  if(!name){
    return "You must enter a name .. this message is using the if statement as input validation:  if(!name){ } ";
  }

  return `My name is ${name} - Function Expression with return using with IF statement As ShortCircuit `;
}

//calling the function: 
// const printName2 = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit("JORDAN OR BRON");

//If not name were passed then I should see on the screen the short circuit printed on the screen:  "You must enter a name";
const printName2 = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit("");


console.log(printName2);

// function expression has the variable
// Arrow function in the new Javascript if you only passing the parameter you do not need the curl brace 
// and the arrow button works as the return button

const createName = () => " "


const createLastName = lastName =>  `My name is ${lastName}`;

createLastName("Jordan");

console.log()
// Function is so we do not repeat ourself: 
const writeThatName = name => {
  const newName = `${name} VR21`;
  const updatedName = `${newName} 2022`;
  console.log(`My name is ${updatedName}`);

}
writeThatName("Jordan");
writeThatName("LeBron");
writeThatName("Al Horford");
writeThatName("Curry");

console.log()



console.log()

// two parameters 
// Function is so we do not repeat ourself: 
const writeThatName2 = (firstName, lastName) => {
  // const newName = `${firstName} ${lastName}`;
  
  console.log(`My name is ${firstName} ${lastName}`);

}
writeThatName2("Michael", "Jordan");
writeThatName2("LeBron ", "James ");
writeThatName2("Al Horford");
writeThatName2("Steph","Curry");

console.log()


// arrays of numbers
// const doubleNumber = (arrayOfNumber) => {
//   return arrayOfNumber.map(num => num * 2);

// }
// //         parameters:
// doubleNumber(5, 10, 30);

const makeCookies = (ingredients) => {
  console.log(ingredients);

}

makeCookies(["flour milk"]);

//ingredient.split(" ")[0]

const printName4 = () => {};
const printNumber = () => {};

const doBoth = () => {
  printName4();
  printNumber();
}


// all scope:

const myGlobal = "My global";

function printGlobal(){
  const myFuncScope = "My function myFunctionScope";
  function myChild(){
    const inner = "inner";
  }
  console.log(myGlobal);
}

console.log(myFuncScope);

let count = 0;

function counter() {
  let myName = "Vlade";
  count++
  return 
}