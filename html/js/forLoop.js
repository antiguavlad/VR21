// For Loop

const characters = ["A","B","C","D","E"];

for(let i = 0; i <= characters.length - 1; i++){

    console.log(characters[i]);

}

//For each or for Up loop in javascript:

const characters2 = ["A","B","C","D","E"];

for(char of characters2){

    console.log(char);

}

// using the key
const characters3 = ["A","B","C","D","E"];

for(key in characters2){

    console.log(characters[key]);

}


const characters4 = ["A","B","C","D","E"];
for(let i = 1; i <= 10; i++){
    console.log(i);

}

const numArray = [1,2,3,4,5];
for(let i = 1; i <= 10; i++){
    console.log(numArray[i]);

}

const arrNums = {1:1, 2:2, 3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10};
for(key in arrNums){
    console.log(arrNums[key]);
}

//2D Array

const newArr = [[1,2,3],[4,5,6],[7,8,9]];
for(arr of newArr){
    console.log(arr);
}

console.log()

const arrNums4 = [1,2,3,4,5,6,7,8,9];
for(num of arrNums4){
    console.log(num);
}

console.log()

const arrNums5 = {1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10};
for(key in arrNums5){
    console.log(arrNums[key]);
}

//2D Array

const newArr6 = [[1,2,3],[4,5,6],[7,8,9]];
for(arr of newArr6){
    console.log(arr);
}

const arrNums7 = {1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11};
for(key in arrNums7){
    // console.log(arrNums7[key]);
    console.log(key , arrNums7[key]); // to get the key and the value then we can add to print statement: console.log(key , arrNums7[key])
}



const newArr9 = [[1,2,3],[4,5,6],[7,8,9]];

console.log(newArr.flat()); 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]

for(arr of newArr9.flat()){
    console.log(arr);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

}