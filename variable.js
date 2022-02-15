//  1. use strict
//  added in ES5
//  use this for Vanilla Javascript. 
'use strict'

//  2. Variable
//  let (added in ES6)

{
    let name = "yeji";
    console.log(name); // yeji
    name = "hello";
    console.log(name); // hello
}
console.log(name); // 값이 출력되지 않음.
// 블럭 안에서 작성한 내용은 바깥 스코프에서 확인 불가능
// 바깥쪽에 선언한 변수를 전역변수라고 함
// 메모리를 위해 가급적이면 블럭 내에서 선언하는것이 좋음

// var (don't ever use this!!!!)
// var hoisting (move declaration from bottom to top) 어디에서 선언했는지 상관없이 항상 최상단으로 선언이 끌어올려지는 것
// has no block scope 블럭안에서 선언해도 바깥스코프에서 확인가능. 오류의 가능성이 커짐.

age = 4;
var age;

//  3. Constant
//  favor immutable date type always for a few reasons:
//   - security
//   - thread safety
//   - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//  4. Variable types
//  primitive, single item: number, string, boolean, null, undefined, symbol
//  object, box container
//  function, first-class function --> 변수에 함수를 담는것이 가능

const count = 17; // integer  --> number
const size = 17.1; // decimal number --> number

//  infinity, -infinity, NaN 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

//  bigInt (fairly uew, don't use it yet)
const bigInt = 1234567890123456789012345678900n;  // over (-2**53) ~ (2*53)


//  string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
const helloBob = `h1 ${bredan}` 


//  boolean
//  false: 0, null, undefined, NaN, ''
//  true: and other value
const canRead = true;
const test = 3 < 1; // felse


//  null
let nothing = null; // 값이 없다고 지정해준것


//  undefined
let x;  // 선언은 되었으나 아무 값이 없는 것


//  symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);  // false
const gSymbol1 = Symbol.for("id");
const gSymbol1 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);  // true
