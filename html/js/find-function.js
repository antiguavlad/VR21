// find function and return the underfined if not found
function myIndexOf(collection, target) {
    for (var val = 0; val < collection.length; val++) {
        if (collection[val] === target) {
            return val;
        }
    }
    return -1;
}

