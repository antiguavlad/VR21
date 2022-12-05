// find function and return the underfined if not found
// function myIndexOf(collection, target) {
//     for (var val = 0; val < collection.length; val++) {
//         if (collection[val] === target) {
//             return val;
//         }
//     }
//     return -1;
// }

const equalsTwo = (num) => num === 2;

// a function that call find that takes call back function 
function find(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        const found = callBack(arr[i]); //current number current element callBack(arr[i])
        if (found) { // if found then pass the test then we return the first element of the matching condition then return it
            return arr[i] //then return the matching element found
        }
    }
    //return undefined
    return undefined;
}

console.log(find([2, 5, 7, 9], equalsTwo)); //2 --->

console.log(find([1, 5, 7, 9], equalsTwo)); //undefined --->
