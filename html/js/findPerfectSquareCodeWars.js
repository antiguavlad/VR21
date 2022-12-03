function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    //container
    let value;
    let nextValue;

    if (Math.sqrt(sq) % 1 === 0) { //checking that the square root is divisible by 1 without any remainder
        //if true then find the perfect square
        value = Math.sqrt(sq) // store the perfect square in the num variable
        //
        nextValue = value + 1;
        //(Math.sqrt(sq)+ 1) **2;

    }
    // return -1 if no perfect square
    else {
        return -1
    }
    const results = nextValue * nextValue; //returning the next perfect square
    return results;
}