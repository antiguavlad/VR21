//add function
function add(accumulator, arrIndexValue) {
    return accumulator + arrIndexValue;
}
//reduce function
function reduce(arr, callBack, initialValue) {
    let accumulator = 0;
    if (initialValue != undefined) {
        accumulator = initialValue;
    }

    for (let i = 0; i < arr.length; i++) {
        accumulator = callBack(accumulator, arr[i]);

    }
    return accumulator;
}
//calling the function which add the array of numbers that is passed
console.log(reduce([1, 2, 3, 4], add)); // 10