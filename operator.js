//  1. String concatenation
console.log('my' + 'cat');   // my cat
console.log('1' + 2);   // 12
console.log(`string literals: 

''''

1 + 2 = ${1 + 2}`);   // tring literals: 1 + 2 = 3  --> 줄바꿈해도, 특수문자를 넣어도 반영


//  2. Numeric operators
const add = (1 + 1);
const substract = (1 - 1);
const divide = (1 / 1);
const multiply = (1 * 1);
const remainder = (5 % 2);
const exponentiation = (2 ** 3);


//  3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;   --> 3
// preIncrement = counter;   --> 3
const postIncrement = counter++;
// postIncrement = counter;   --> 3
// counter = counter + 1;   --> 4


//  4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;
x *= y;
x /= y;


//  5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 => 6);


//  6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//  || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log("boob!");
    }
    return true;
}

//  8. if, else if, else
const name = "yeji";
if (name === "yeji") {
    console.log("Welcome, YEJI!");
} else if (name === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("xxx");
}


//  9. Ternary operator: ?
//  condition ? value1 : vlaue2;
console.log(name === "yeji" ? "yes" : "no");
// 간단하게 표현가능할떄만 사용



//  10. Switch statement
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "Chrome":
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

//  11. Loops
//  while loop, while the condition is truthy,
//  body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop,  for(begin; condition; step)
for (i = 3; 1 > 0; i--) {
    console.log(`for: ${i}`);
}


