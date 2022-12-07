# HTML, CSS & JavaScript Fundamentals

##  Basic web page setup - YES 

##  Opening and closing tags - YES
##  Adding links - YES 
##  Adding images - YES
##  Display vs in block block elements
- Resource: about this subject: 

https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/

## CSS box model
- In web development, the CSS box model refers to how HTML elements are modeled in browser engines and how the dimensions of those HTML elements are derived from CSS properties. It is a fundamental concept for the composition of HTML webpages.
  
- Properties:
  - height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
  - width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
  
- https://en.wikipedia.org/wiki/CSS_box_model



## Variables in JavaScript let, var, constant
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
## Variable scoping
- Types of Scopes in JavaScript: 

    Block scope
    Function scope
    Local scope
    Global scope

Block scope: Earlier JavaScript had only Global Scope and Function Scope. let and const are the two new important keywords that were introduced by the ES6 and these two keywords provide Block Scope in JavaScript. ECMAScript (ES6) 2015 was the second major revision to JavaScript. Variables that are declared inside a { } block cannot be accessed from outside the block.

{
 let x = 2;
}
x cannot be used here

- https://www.geeksforgeeks.org/what-is-variable-scope-in-javascript/

## Writing and call a function

function square(number) {
  return number * number;
}

return number * number;

function expression:

Function expressions:

const square = function (number) {
  return number * number;
}
const x = square(4); // x gets the value 16

-------------------------------------------------------
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}


 [Function and Function expression:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

## Writing a function with parameters
In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
}

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);

## Data types
Strings

A string is a collection of alphanumeric characters. I start a string by typing double quotes, single quotes, or the backtick character. Double quote and single quote behave identically, and the backtick character comes with some extra functionality.

Let’s stick with the basics. We got our double quote string here. I typed the word, “string”, but the quotes is what I need to actually say that I am creating a string. Then, inside of the quote, I can put whatever I want. “The dog went on a walk to 7-11”. You’ll notice that all remains the exact same color because it’s within the quote marks. If I were to copy this and place it outside quote marks, you’ll notice that the coloring in my editor is very differently. That’s because this default blue color in my current scheme is trying to look for a variable with this name. It’s not finding it. This doesn’t make any sense to it. It doesn’t know it’s trying to do 7-11 and some other weird things in here.

But when we wrap a value in a string, in quotes, it creates a string at which point we can put any valid alphanumeric character we would like inside the string. We can add a whole bunch of weird special characters, letters, and numbers. That’s all valid inside of a string. The only thing that’s not valid is another quote mark because that ends the string and now I have a quote mark sitting out here all by itself without having a match.

We need to be careful about using quote marks inside of strings. The same kind of quote mark. We can do the same thing inside of here, the same rules apply. Anything goes inside of it, and once again, copy and paste, the same thing applies inside of backticks. One of the great things that backticks support that other strings don’t is, let’s say that I turn this into a really, really, really long sentence, and decided I don’t want that to go off the screen. I’m going to hit enter. I have to go to a new line. We have our coloring problem, it’s reappeared to indicate that this isn’t valid. It’s, again, trying to do JavaScript instead of just treating it like a string.

But if I were to, once again, copy that and paste it inside this backtick, with a backtick we can hit enter, and it works. Backticks will respect the enter key and allow us to split a string into multiple lines of code. When in doubt, it’s really common for developers to be using the backtick for their default screen notice. So go ahead and do that, but as you’re reading tutorials, blogs, articles, other content, you’ll often see the double quote and the single quote. Remember, it’s a string in the same way that the backtick is. It’s holding alphanumeric characters, letters, numbers, and special symbols. This is an important part of human communication. We write sentences, we message each other on slack and all these other things, so we need a way to store that information that basically leaves it intact the way that the user gave it to us, and that’s where strings
come into play.

Numbers 

Numbers. Let’s talk about numbers. Numbers are as straightforward as they sound. Numbers are for numbers. I can’t put a letter on here. It’s no longer a number, and the coloring gets funky. It’s no longer green. But I can make this number be as long as I want it. I cannot add a comma, but I can add a decimal point. So numbers are any integer or decimal number created in the language, and they’re used for money, age, etc. the same kinds of things that we use money for here in real life.

Booleans

Booleans have two values. True and false. When we create a boolean, we’re simply saying it’s true or it’s false. It’s like that on/off switch example that we talked about. It’s all there is to them right now. We’re gonna talk into other aspects of playing into these variables in another time.

I’m gonna go ahead and label these for those of you that are taking a minute to think. These were strings. This is number, and this is a boolean, also called a bool, from time to time. All right. Next up, we’re gonna talk about null and undefined.

Null and Undefined 

As we mentioned in the conceptual videos, null and undefined stand for empty. That means they have no value assigned to them. The difference is undefined exists when we haven’t given a value. If I were to go turn var rhyme, and do the good, old classic, “Roses are red and violets are blue.” This is a string. I’m going to … I told you to use backticks, so I’m gonna go ahead and use backticks. See, if I can do it, you can do it. If you just used the wrong quote, that’s okay. Just remember to fix it. “Roses are read and violets are blue.” Put that on a variable.

- https://devmountain.com/blog/what-are-data-types-javascript-101/
- 
## Objects Array

Array

The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Built in methods
his chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with the global object. Here, "global objects" refer to objects in the global scope.

The global object itself can be accessed using the this operator in the global scope. In fact, the global scope consists of the properties of the global object, including inherited properties, if any.

Other objects in the global scope are either created by the user script or provided by the host application. The host objects available in browser contexts are documented in the API reference.

For more information about the distinction between the DOM and core JavaScript, see JavaScript technologies overview.

Function properties

These global functions—functions which are called globally, rather than on an object—directly return their results to the caller.

    eval()
    isFinite()
    isNaN()
    parseFloat()
    parseInt()
    decodeURI()
    decodeURIComponent()
    encodeURI()
    encodeURIComponent()
    escape() Deprecated
    unescape() 

    Fundamental objects

These objects represent fundamental language constructs.

    Object
    Function
    Boolean
    Symbol

Fundamental objects

These objects represent fundamental language constructs.

    Object
    Function
    Boolean
    Symbol

Error objects

Error objects are a special type of fundamental object. They include the basic Error type, as well as several specialized error types.

    Error
    AggregateError
    EvalError
    RangeError
    ReferenceError
    SyntaxError
    TypeError
    URIError
    InternalError Non-standard

Numbers and dates

These are the base objects representing numbers, dates, and mathematical calculations.

    Number
    BigInt
    Math
    Date

Text processing

These objects represent strings and support manipulating them.

    String
    RegExp

Indexed collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

    Array
    Int8Array
    Uint8Array
    Uint8ClampedArray
    Int16Array
    Uint16Array
    Int32Array
    Uint32Array
    BigInt64Array
    BigUint64Array
    Float32Array
    Float64Array

Keyed collections

These objects represent collections which use keys. The iterable collections (Map and Set) contain elements which are easily iterated in the order of insertion.

    Map
    Set
    WeakMap
    WeakSet

Structured data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

    ArrayBuffer
    SharedArrayBuffer
    DataView
    Atomics
    JSON


- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  
## Querying the DOM

Locating DOM elements using selectors

The Selectors API provides methods that make it quick and easy to retrieve Element nodes from the DOM by matching against a set of selectors. This is much faster than past techniques, wherein it was necessary to, for example, use a loop in JavaScript code to locate the specific items you needed to find.
The NodeSelector interface

This specification adds two new methods to any objects implementing the Document, DocumentFragment, or Element interfaces:

querySelector()

    Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
querySelectorAll()

    Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.

Note: The NodeList returned by querySelectorAll() is not live, which means that changes in the DOM are not reflected in the collection. This is different from other DOM querying methods that return live node lists.

You may find examples and details by reading the documentation for the Element.querySelector() and Element.querySelectorAll() methods.
Selectors

The selector methods accept selectors to determine what element or elements should be returned. This includes selector lists so you can group multiple selectors in a single query.

To protect the user's privacy, some pseudo-classes are not supported or behave differently. For example :visited will return no matches and :link is treated as :any-link.

Only elements can be selected, so pseudo-classes are not supported.
Examples

To select all paragraph (p) elements in a document whose classes include warning or note, you can do the following:

const special = document.querySelectorAll("p.warning, p.note");

You can also query by ID. For example:

const el = document.querySelector("#main, #basic, #exclamation");


- https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
  
##  Event listeners

EventTarget.addEventListener()

The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

Note: The addEventListener() method is the recommended way to register an event listener. The benefits are as follows:

    It allows adding more than one handler for an event. This is particularly useful for libraries, JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.
    In contrast to using an onXYZ property, it gives you finer-grained control of the phase when the listener is activated (capturing vs. bubbling).
    It works on any event target, not just HTML or SVG elements.

The method addEventListener() works by adding a function, or an object that implements EventListener, to the list of event listeners for the specified event type on the EventTarget on which it's called. If the function or object is already in the list of event listeners for this target, the function or object is not added a second time.

Note: If a particular anonymous function is in the list of event listeners registered for a certain target, and then later in the code, an identical anonymous function is given in an addEventListener call, the second function will also be added to the list of event listeners for that target.

Indeed, anonymous functions are not identical even if defined using the same unchanging source-code called repeatedly, even if in a loop.

Repeatedly defining the same unnamed function in such cases can be problematic. (See Memory issues, below.)

If an event listener is added to an EventTarget from inside another listener — that is, during the processing of the event — that event will not trigger the new listener. However, the new listener may be triggered during a later stage of event flow, such as during the bubbling phase.
Syntax

addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)


- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener




The event listener callback

The event listener can be specified as either a callback function or an object whose handleEvent() method serves as the callback function.

The callback function itself has the same parameters and return value as the handleEvent() method; that is, the callback accepts a single parameter: an object based on Event describing the event that has occurred, and it returns nothing.

For example, an event handler callback that can be used to handle both fullscreenchange and fullscreenerror might look like this:

function eventHandler(event) {
  if (event.type === 'fullscreenchange') {
    /* handle a full screen toggle */
  } else /* fullscreenerror */ {
    /* handle a full screen toggle error */
  }
}


- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usage_notes


## How to MDN documentation

- How to Read JavaScript Documentation on MDN

- https://www.youtube.com/watch?v=FSe_phZ2wmg


- How to Read Technical Documentation for Software Engineers 
- https://www.youtube.com/watch?v=lwqeNnboh_4


JavaScript — Dynamic client-side scripting:

https://developer.mozilla.org/en-US/docs/Learn/JavaScript