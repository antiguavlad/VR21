
- website showing the extension I selected for the Markdowns in CS CODE: 
- https://www.youtube.com/watch?v=zKQbdi9xTJY&t=88s

# Chapter 1 - Values, Types, and Operators.
# | :smile:
## Five things learned about this chapter:

1. Learned about the binary code and how the computer read and intepret the numbers. Sample in the book: 
-  0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.

2. Order of operation is done as follow for 100 + 4 * 11
   - (100 + 4) * 11

3. Different ways to write a string using any of the different quotes:
   - `Down on the sea`
   -  "Lie on the ocean"
   -  'Float on the ocean'
4.  How to write two different lines in the same sentence: 
   - "This is the first line\nAnd this is the second"
   - The actual text contained is this:
    
        This is the first line
        And this is the second
5. . String literals: 
   - `half of 100 is ${100 / 2}`

Boolean example:

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

Strings can be compared in the same way.

console.log("Aardvark" < "Zoroaster")
// → true


Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).

console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false

Logical operators
There are also some operations that can be applied to Boolean values themselves. JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.

The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.

console.log(true && false)
// → false
console.log(true && true)
// → true


The || operator denotes logical or. It produces true if either of the values given to it is true.

console.log(false || true)
// → true
console.log(false || false)
// → false

Automatic type conversion
In the Introduction, I mentioned that JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things. This is nicely demonstrated by the following expressions:

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN. But when the types differ, JavaScript uses a complicated and confusing set of rules to determine what to do. In most cases, it just tries to convert one of the values to the other value’s type. However, when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

1
console.log(null == undefined);
2
// → true
3
console.log(null == 0);
4
// → false


Return values


# Chapter 2: Program Structure.
# |:smile:
## Five things learned about this chapter:

Showing a dialog box or writing text to the screen is a side effect. A lot of functions are useful because of the side effects they produce. Functions may also produce values, in which case they don’t need to have a side effect to be useful. For example, the function Math.max takes any amount of number arguments and gives back the greatest.

console.log(Math.max(2, 4));
// → 4
When a function produces a value, it is said to return that value. Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions. Here a call to Math.min, which is the opposite of Math.max, is used as part of a plus expression:

console.log(Math.min(2, 4) + 100);
// → 102

As an example that actually does something useful, we can now write a program that calculates and shows the value of 210 (2 to the 10th power). We use two bindings: one to keep track of our result and one to count how often we have multiplied this result by 2. The loop tests whether the second binding has reached 10 yet and, if not, updates both bindings.

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
The counter could also have started at 1 and checked for <= 10, but for reasons that will become apparent in Chapter 4, it is a good idea to get used to counting from 0.

A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


for loops
Many loops follow the pattern shown in the while examples. First a “counter” binding is created to track the progress of the loop. Then comes a while loop, usually with a test expression that checks whether the counter has reached its end value. At the end of the loop body, the counter is updated to track progress.

Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop.

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera

The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

This is the code that computes 210 using for instead of while:

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024


Breaking Out of a Loop
Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21


Updating bindings succinctly
Especially when looping, a program often needs to “update” a binding to hold a value based on that binding’s previous value.

counter = counter + 1;
JavaScript provides a shortcut for this.

counter += 1;
Similar shortcuts work for many other operators, such as result *= 2 to double result or counter -= 1 to count downward.

This allows us to shorten our counting example a little more.

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
For counter += 1 and counter -= 1, there are even shorter equivalents: counter++ and counter--.

Dispatching on a value with switch
It is not uncommon for code to look like this:

if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();


There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:

​
1
switch (prompt("What is the weather like?")) {
2
  case "rainy":
3
    console.log("Remember to bring an umbrella.");
4
    break;
5
  case "sunny":
6
    console.log("Dress lightly.");
7
  case "cloudy":
8
    console.log("Go outside.");
9
    break;
10
  default:
11
    console.log("Unknown weather type!");
12
    break;
13
}

# Chapter 13 - Program Structure:
# |:smile:
## Five things learned about this chapter.

1. .
2. .
3. .
4. .
5. .

# Chapter 14 - The Document Object Model.
# |:smile:
## Five things learned about this chapter:

1. .
2. .
3. .
4. .
5. .