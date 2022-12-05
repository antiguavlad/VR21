//filter 
const newArray = [1, 2, 3, 4, 5, 6, 7, 8];

function isEven(num) {
    return num % 2 === 0;
}

function filter(arr, callBack) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            results.push(arr[i]);
        }
    }
    return results;
}
console.log(filter(newArray, isEven)); //[ 2, 4, 6, 8 ]