/*

let b=12;
console.log(b);

//console.log(b);
//const b=25;

//console.log(age);
//let age =25;

// global, blocked and functions

// global
var x=1;
{
    var x=3;
}
console.log(x);

//block and global
let a=10;
{
    let a =20;
    console.log("inside:",a);
}
console.log("outside:",a);

*/


/*

// DATA TYPES

//primitives - aisi saari values jinko copy karne par ek real copy mil jaye
// string, number, boolean, null, undefined, symbol, bigint
let a= 12;
let b=a;
a=a+12;
// bigint
let y= 9007199254740991n;
y=y+3;

*/


//refernce - inko copy karne pe real copy nahi milegi but refernce milega parent ka
// aarays, objects, functions
// [] {} ()
let i={
    name:"pari",
};
let j=i;
j.name="nita";   
   

// Dynmic typing -> js me ststic typing nhi hotiu hai yaha hoti hai dynamic typing.
// matlb ki data ko chnage kar skte hai
 let d=12;
 d=true;
 d=[];
 d="parinita";
 d=null;


 // typeof quirks (e.g., typeof null=='object')


 // type coercion (== vs ===)
 // truthy vs falsy values

// 0, false, "", null, undefined, NaN, document.all -> false
// rest all -> true


 //type coercion -> concept jisme aapka ek type automatically convert ho jayega
e="5"+1  // dono operand me se ek bhi agar string rahega to string banega 
e="5"-1


// OPERATORS

// arithmetic
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8


// comparision
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// assignment
let score = 5;
score += 2; // score = 7

// logical
let age = 20, hasID = true;
if (age >= 18 && hasID) {
 console.log("Allowed");
}

// unary operator
// + - ! typeof
let x = "5";
console.log(+x); // 5 (converted to number)

//Ternary Operator (Conditional)
// ?:
 //condition ? valueIfTrue : valueIfFalse
let marks = 80;
let grade = score > 50 ? "Pass" : "Fail";
 12>13 ? console.log("true") : console.log("false")

  
// typeof
typeof 123 // "number"
typeof "hi" // "string"
typeof null // "object" (JS bug)
typeof [] // "object" , error 
typeof {} // "object"
typeof function(){} // "function"


// questions
let u=10;
let v=20;
if(x>5 && y<25){
    console.log("A");
}
else{
    console.log("B");
}

// question
let isAdmin=true;
let isLoggedIn= false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access denied");
}

//question
let temp=35;
if (!(temp<30)){
    console.log("hot");
}
else{
    console.log("pleasant");
}

// question 
let mark=25;
let grades=mark>=90?"A":mark>=75?"B":mark>=60?"C":"Fail";
console.log(mark);

// question 
let n=5;
let result=n++ + ++n;
console.log(result);

// question 
let count=5;
if(count-- ===5){
    console.log("Matched");
}
else{
    console.log("not matched");
}



// FLOW CONTROL

//if, else if, else
let number = 78;
if (number >= 90) {
 console.log("A");
} else if (number >= 75) {
 console.log("B");
} else {
 console.log("C");
}

//  switch-case
let fruit = "apple";
switch (fruit) {
 case "banana":
 console.log("Yellow");
 break;
 case "apple":
 console.log("Red");
 break;
 default:
 console.log("Unknown");
}

//  Early Return Pattern
function checkAge(age) {
 if (age < 18) return "Denied";
 return "Allowed";
}
console.log(checkAge(15));