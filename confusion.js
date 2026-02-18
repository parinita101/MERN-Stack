// confusion 1: why var leaks outside block but let doesn't??
/*
if (true){
    var c=1;
    let a=2;
}
console.log(c);
console.log(a);
*/


// confusion 2: why const allow changing object properties??
const person={ name:"parinita"};
person.name ="sharma";
//person={};


// Confusion 3: why NaN is a number? 
typeof NaN=='number'
// kyuki NaN ek failed number opertaion hai.
// aur jb bhi failed number operation hoga uska type NaN aayega


// confusion 4: undefined vs null
let x;
console.log(x);// undefined
let y=null;
console.log(y);// null
// undefined value variable ko by default milti hai agar usko koyi value nhi diye rahte hai to
// null ko ham manually assigned karte hai ki abhi tak value assign nhi huyi hai lekin aage jake hogi.


// confusion 5: !! value for thruthiness
// !!0 -> ye iske real true or false nature ko dikhata hai


// confusion 4: pre vs post increament
let i=1;
console.log(++i); //2
console.log(i++); //2(but i is now 3)