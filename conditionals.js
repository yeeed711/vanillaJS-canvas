//const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));

//if(condition){
    // condition === true
//} else {
    // condition === false
//}

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if(age >=18 && age <=50) {
    console.log("You can drink");
    // && === AND operator, || === OR operator
}else if(age > 50 && age <=80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can whatever you want.");
} // else 는 선택사항. 추가하지 않아도 된다.


//  true || true === true
//  false || true === true
//  true || false === true
//  false || false === false

//  true && true === true
//  true && false === false
//  false && true === false
//  false && false === false