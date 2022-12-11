// const cardCollection = [{ id: 1, title: "Car 1", description: " My description 1" }, { id: 2, title: "Car 2", description: "My description 1" },
// { id: 3, title: "Car 3", description: "My description 1" }]

// cardCollection

// localStorage.setItem("cardCollection", JSON.stringify(cardCollection));

// JSON.parse(localStorage.getItem("cardCollection"))

// JSON.parse(localStorage.getItem(cardCollection))[2]

// JSON.parse(localStorage.getItem(cardCollection))[2].description

// localStorage.clear();

// localStorage.removeItem(cardCollection)

// JSON.parse(localStorage.getItem("carCollection"))[2]



// localStorage is an Object that is part of the global Window object.
// console.log(window.localStorage);

// Save an item to local storage.
localStorage.setItem("username", "Jordan");

// You can retrieve it with getItem
const name = localStorage.getItem("username");
console.log(name);

// setItem will override the key-value pair from before.
localStorage.setItem("username", "vlad");
const newName = localStorage.getItem("username");
console.log(newName);

// You can set multiple items of different types.
localStorage.setItem("isVegan", false); //boolean
localStorage.setItem("age", 30);//number
localStorage.setItem("hobbies", ["cooking", "running", "singing"]);

// However when you read them back with getItem, they're going to be strings.
const isVegan = localStorage.getItem("isVegan");
const age = localStorage.getItem("age");
const hobbies = localStorage.getItem("hobbies");
console.log(typeof isVegan);
console.log(typeof age);
console.log(typeof hobbies);

// They're actually saved as JSON strings if you use JSON.stringify, 
// which can be reconstructed with JSON.parse
localStorage.setItem("hobbies", JSON.stringify(["cooking", "running", "singing"]));

// Will be read in as an array because it was saved with JSON.stringify as an array.
const hobbiesArray = JSON.parse(localStorage.getItem("hobbies"));
console.log(typeof hobbiesArray);
console.log(hobbiesArray instanceof Array);

// Will be read in as a number because it was saved with JSON.stringify as a number.
const ageNum = JSON.parse(localStorage.getItem("age"));
console.log(typeof ageNum);

// Will be read in as a boolean because it was saved with JSON.stringify as a boolean.
const isVeganBoolean = JSON.parse(localStorage.getItem("isVegan"));
console.log(typeof isVeganBoolean);
