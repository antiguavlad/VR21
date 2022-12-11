//url image validation:  https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/

//To check if a string is a valid HTTP URL, you can use the protocol property of the URL object:

function isValidHttpUrl(string) {
    try {
        const newUrl = new URL(string);// URL constructor
        return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
        return false;
    }
}


//To check if a string is a valid HTTP URL, you can use the protocol property of the URL object:
//The difference here is that you're not returning true after the new URL object is created. Instead, 
//you're checking if the protocol property has a value equal to 'http:' or 'https:' and returning true if it is and false if not.

console.log("Good http or https url: ", isValidHttpUrl('https://www.freecodecamp.org/')); // true
console.log("Bad http or https url: ", isValidHttpUrl('mailto://mail@freecodecamp.org')); // false
console.log("Bad http or https url: ", isValidHttpUrl('freecodecamp')); // false

//printing: 
// Good http or https url:  true
// Bad http or https url:  false
// Bad http or https url:  false