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



// LOOPS -> repeat karna
//for,while, foreach

// for loop->> kaha se jana hai->kaha tak jana hai->kaise jana hai
// for(start;end;change)
for(let i=1;i<101;i++){
    console.log(i);
}

/* while->> kaha se jana hai->kab rukna hai -> kaise jana hai
while(end){
    code
    change
}
*/
let p=1;
while(p<32){
    console.log(p);
    p++;
}

/* do while
start
do{
    code;
}
while(end)
*/
let q=1;
do{
    console.log(q);
    q++;
}
while(q<20);

// break
//1-20 tak print karao aur agar 13 mile to wahi ruk jao
for(l=1;l<21;l++){
    console.log(l);
    if(l===13){
        break;
    }
}

// continue
//1-20 tak print ho  magar 13 na print ho 
for(l=1;l<21;l++){
    if(l===13){
        continue;
    }
        console.log(l);
}


// FUNCTION -> reuse of code

// function declaration
function newYear(){
    console.log("Happy New Year");
}
newYear()

 // function expression
let=function(){   
    console.log("Happy New Year");
}
newYear()

// fat arrow function
let func=()=>{
    console.log("happy new year");
}
func();

// parameter vs argument
function dance(v1){
    console.log(`${v1} naach rha hai`);
}
dance("kutta");
dance("billi");
dance("bakri");
dance("ghoda");
dance("chuha");

function add(v1,v2){        // parameter
    console.log(v1+v2);
}
add(4,5);                   // argument
add(8,6);


//default farameters
function add(v1=0,v2=3){
    console.log(v1+v2);
}
add();


// rest-> jab argument kai sare ho to hame utne ki paramrter banane padte hai,
// isase bachne ke liye ham rest ka use karte hai
// agar... function ke parameter space me lage to wo rest operator hai
// agr wo array annnnnd objects me lage to to wo spread operator ahi
function abcd(a,b,c, ...val){
    console.log(a,b,c,val);
}
abcd(1,5,3,6,7,1,9,2,);


// return
function abcd(){
    return 12;
}
let val=abcd();
console.log(val);


//first class function -> function ko values ke tarh treat kar sakte hai
// jaha jaha value ja saktti hai waha waha function bhi ja sakta hai
function abc(val){
    val();
}
abc(function(){
    console.log("heyyyy");
});


// higher order funvtion -> wo function jo return kare ek function ya phir accept kare ek function apne parameter me
// accept
function abcd(val){

}
abcd(function(){

});

// return
function abcd(){
    return function() {
        console.log("heeeeyyyyyy");
    }
}
abcd()();

/*

// pure vs impure function  
// pure function -> jo bahar ki value ko na badle
// impure function -> jo bahar ki value ko badal de
let ab=12;
function abcd(){
    console.log("pure function")
}

let abcdef=12;
function abcde(){
    abcdef ++;
}

// closure -> ek function jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable

function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}

// lexical function -> function ke andar ka bana hua bas function ke andar use kar sakte hai
function abcd(){
    let a=12;
    function defg(){
        let b=13;
        function ghij(){
            let c=14;
        }
    }
}

*/

// IIFE (Immediately Invoked Function Expression)
// 
(function(){
    console.log("hiii");
})();

//hoisting -> function banne se ko call karna 
// function declaration me hoisting hota hai, function expression me nhi kar sakte hai hoisting
xyz();


function xyz(){
    console.log("heheheheh");
}




