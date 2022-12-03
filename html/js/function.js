// // functions:
// console.log();

// //function declaration:
// function writeMyNameDeclaration(){
//   console.log("My name is Vlad --- function declaration");
//   console.log("My last name is Antigua --- function declaration");

// }

// //calling the function: 
// writeMyNameDeclaration();

// console.log();

// // assigning a variable to the function called a function expression
// const writeMyNameFunctionExpression = function (){
//   console.log("My name is Vlad - Function Expression ");
//   console.log("My last name is Antigua - Function Expression ");

// }

// //calling the function: 
// writeMyNameFunctionExpression();


// console.log();

// //using the return in a fuction


// console.log();

// //function declaration using return:
// function writeMyNameDeclarationWITHRETURN(){
//   // console.log("My name is Vlad --- function declaration with return");
//   // console.log("My last name is Antigua --- function declaration with return");
//   return "My last name is Antigua --- function declaration with return";

// }

// //calling the function: 
// writeMyNameDeclarationWITHRETURN();

// console.log();


// console.log();

// // assigning a variable to the function called a function expression
// const writeMyNameFunctionExpressionUsingRETURN = function (){
//   // console.log("My name is Vlad - Function Expression with return ");
//   // console.log("My last name is Antigua - Function Expression with return");

//   return "My name is Vlad - Function Expression with return ";
// }

// //calling the function: 
// writeMyNameFunctionExpressionUsingRETURN();


// console.log();

// // fucntion with a parameter

// // assigning a variable to the function called a function expression
// const writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERS = function (name){
//   // console.log("My name is Vlad - Function Expression with return ");
//   // console.log("My last name is Antigua - Function Expression with return");

//   return `My name is ${name} - Function Expression with return`;
// }

// //calling the function: 
// const printName = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERS("JORDAN OR BRON");


// console.log(printName);


// console.log()

// // fucntion with a parameter -- short circuiting by checking if the person entered the name by using the if statement to see
// // if they are suing the right data

// // assigning a variable to the function called a function expression
// const writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit = function (name){
//   // console.log("My name is Vlad - Function Expression with return ");
//   // console.log("My last name is Antigua - Function Expression with return");
//   if(!name){
//     return "You must enter a name .. this message is using the if statement as input validation:  if(!name){ } ";
//   }

//   return `My name is ${name} - Function Expression with return using with IF statement As ShortCircuit `;
// }

// //calling the function: 
// // const printName2 = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit("JORDAN OR BRON");

// //If not name were passed then I should see on the screen the short circuit printed on the screen:  "You must enter a name";
// const printName2 = writeMyNameFunctionExpressionUsingRETURNandTAKINGPARAMETERSwithIFstatementAsShortCircuit("");


// console.log(printName2);

// // function expression has the variable
// // Arrow function in the new Javascript if you only passing the parameter you do not need the curl brace 
// // and the arrow button works as the return button

// const createName = () => " "


// const createLastName = lastName =>  `My name is ${lastName}`;

// createLastName("Jordan");

// console.log()
// // Function is so we do not repeat ourself: 
// const writeThatName = name => {
//   const newName = `${name} VR21`;
//   const updatedName = `${newName} 2022`;
//   console.log(`My name is ${updatedName}`);

// }
// writeThatName("Jordan");
// writeThatName("LeBron");
// writeThatName("Al Horford");
// writeThatName("Curry");

// console.log()



// console.log()

// // two parameters 
// // Function is so we do not repeat ourself: 
// const writeThatName2 = (firstName, lastName) => {
//   // const newName = `${firstName} ${lastName}`;
  
//   console.log(`My name is ${firstName} ${lastName}`);

// }
// writeThatName2("Michael", "Jordan");
// writeThatName2("LeBron ", "James ");
// writeThatName2("Al Horford");
// writeThatName2("Steph","Curry");

// console.log()


// // arrays of numbers
// // const doubleNumber = (arrayOfNumber) => {
// //   return arrayOfNumber.map(num => num * 2);

// // }
// // //         parameters:
// // doubleNumber(5, 10, 30);

// const makeCookies = (ingredients) => {
//   console.log(ingredients);

// }

// makeCookies(["flour milk"]);

// //ingredient.split(" ")[0]

// const printName4 = () => {};
// const printNumber = () => {};

// const doBoth = () => {
//   printName4();
//   printNumber();
// }


// // all scope:

// const myGlobal = "My global";

// function printGlobal(){
//   const myFuncScope = "My function myFunctionScope";
//   function myChild(){
//     const inner = "inner";
//   }
//   console.log(myGlobal);
// }

// // console.log(myFuncScope);

// let count = 0;

// function counter() {
//   let myName = "Vlade";
//   count++
//   return `${myName} has called the counter function ${count} time!`;
// }

// counter();
// counter();
// count;


console.log("difference subtract")

const difference = (num1, num2) => {
    return num1 - num2;
}

console.log(difference(8,1)) //7
console.log(difference(2,2)) //0
console.log(difference(0,2)) //-2

console.log("Product multiply")

const multiply = (num1, num2) => {
    return num1  * num2;
}

console.log(multiply (8,1)) //8
console.log(multiply (2,2)) //4
console.log(multiply (0,2)) //0

console.log("Print Days")

/** 
 *      

Functions Exercise»

Your assignment is to write the following functions in the descriptions below - good luck!
difference»

    this function takes in two parameters and returns the difference of the two;

difference(2,2); // 0
difference(0,2); // -2

product»

    this function takes in two parameters and returns the product of the two;

product(2,2); // 4
product(0,2); // 0

printDay»

    this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

printDay(4); // "Wednesday"
printDay(41); // undefined

 * **/

function printDay(num){
    let dates = {
    //key  value
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
    };
    return dates[num];
}

const printDaysOfWeek = printDay(4);
const printDaysOfWeekUndefined = printDay(41);

console.log(printDaysOfWeek);
console.log(printDaysOfWeekUndefined);

console.log("Last Element");

/**
 * 
lastElement»

    this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

lastElement([1,2,3,4]); // 4
lastElement([]); // undefined
 * 
 * **/

function lastElement(arr){
    return arr[arr.length-1];
}

const latElementArr = lastElement([1,2,3,4]); 
console.log(latElementArr);// 4

const latElementArrUndefined = lastElement([]); 
console.log(latElementArrUndefined);// undefined

console.log("numberCompare");

/**
 * 
numberCompare»

    this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

numberCompare(1,1); // "Numbers are equal"

numberCompare(2,1); // "First is greater"

numberCompare(1,2); // "Second is greater"


 * 
 * **/

function numberCompare(num1, num2){
    if(num1 === num2){
        return 'Numbers are equal';

    }
    else if( num1 > num2) {
        return 'First Number is greater'

    } else{
        'Second is greater';
    }
}

const numberToCompare1 = numberCompare(1,1); // "Numbers are equal"
console.log(numberToCompare1);

const numberToCompare2 = numberCompare(2,1); // "First is greater"
console.log(numberToCompare2);

const numberToCompare3 = numberCompare(1,2); // "Second is greater"
console.log(numberToCompare3);

console.log()
console.log("Single Letter Count")
console.log()

/**
 * 
 *      

Functions Exercise»

Your assignment is to write the following functions in the descriptions below - good luck!
difference»

    this function takes in two parameters and returns the difference of the two;

difference(2,2); // 0
difference(0,2); // -2

product»

    this function takes in two parameters and returns the product of the two;

product(2,2); // 4
product(0,2); // 0

printDay»

    this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

printDay(4); // "Wednesday"
printDay(41); // undefined

lastElement»

    this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

lastElement([1,2,3,4]); // 4
lastElement([]); // undefined

numberCompare»

    this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

numberCompare(1,1); // "Numbers are equal"

numberCompare(2,1); // "First is greater"

numberCompare(1,2); // "Second is greater"

singleLetterCount»

    this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2


 * **/

function singleLetterCount(str1, letter){
    let finalCount = 0;
    for(let i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }
const singleLetterCount1 = singleLetterCount('amazing','A'); 
console.log(singleLetterCount1);// 2

const singleLetterCount2 = singleLetterCount('Rithm School','o');
console.log(singleLetterCount2) // 2


console.log()
console.log("Multiple Letter Count")
console.log()

/**
 * 
multipleLetterCount»

    this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}


 * **/

function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }

const multipleLetterCount1 = multipleLetterCount("hello"); 
console.log(multipleLetterCount1);// {h:1, e: 1, l: 2, o:1}

const multipleLetterCount2 = multipleLetterCount("person");
console.log(multipleLetterCount2); // {p:1, e: 1, r: 1, s:1, o:1, n:1}


console.log()
console.log("Array Manipulation")
console.log()

/**
 * 
arrayManipulation»

    this function should take in at most four parameters (an array, command, location, and value).
        If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
        If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
        If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
        If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.

arrayManipulation([1,2,3], "remove", "end"); // 3

arrayManipulation([1,2,3], "remove", "beginning"); // 1

arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]

arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
 * 
 * **/

function arrayManipulation(){


}

function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }
  
const arrayManipulation1 = arrayManipulation([1,2,3], "add", "beginning", 20); 
console.log(arrayManipulation1); // [20,1,2,3]

const arrayManipulation2 = arrayManipulation([1,2,3], "add", "end", 30); 
console.log(arrayManipulation2); // [1,2,3,30]



console.log()
console.log("is Palindrome")
console.log()

/**
 * 
    A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true

isPalindrome('testing'); // false

isPalindrome('tacocat'); // true

isPalindrome('hannah'); // true

isPalindrome('robert'); // false


 * 
 * **/

function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    // for(let i =0; i<str.length/2; i++){
    //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
    //     return false;
    //   }
    // }
    // return true;
  }


 const isPalindrome1 =  isPalindrome('testing'); 
 console.log(isPalindrome1);// false

 const isPalindrome2 =  isPalindrome('tacocat'); 
 console.log(isPalindrome2);// true

 const isPalindrome3 =  isPalindrome('hannah'); 
 console.log(isPalindrome3);// true

 const isPalindrome4  = isPalindrome('robert'); 
 console.log(isPalindrome4);// false


 console.log()
 console.log("Rock / Paper / Scissor")
 console.log()



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