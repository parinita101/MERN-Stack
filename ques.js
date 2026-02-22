// question 1 : score

// method 1
function getScore(score){
    if (score>=90 && score <=100){
        return "A+";
    }
    else if(score >=80 && score<=89){
        return"A";
    }
    else if(score >=70 && score<=79){
        return"B";
    }
    else if(score >=60 && score<=69){
        return"C";
    }
    else if(score >=33 && score<=59){
        return"D";
    }
    else if(score >=0 && score<=32){
        return"Fail";
    }
    else {
        return"Invalid Score";
    }
}
console.log(getScore(78));


// method 2
function getScore(score){
    if (score>=90 && score<=100) return "A+";
    if(score >=80 && score<=89) return"A";
    if(score >=70 && score<=79)return"B";
    if(score >=60 && score<=69) return"C";
    if(score >=33 && score<=59) return"D";
    if(score >=0 && score<=32) return"Fail";
    return "invalid marks";
}
console.log(getScore(54));


// Question:2 
// Rock-paper-scissor logic
function rps(user, computer){
    if(user===computer) return "draw";
    if(user==="rock" && computer==="scissor") return "user";       
    if(user==="scissor" && computer==="paper") return "user";
    if(user==="paper" && computer==="rock") return "user";
    return "computer";
}

console.log(rps("rock","rock"));

// Ques:3 (loop)
//print 1-10 ising for loop
for(x=1;x<11;x++){
    console.log(x);
}

// ques:4 (10-1 using while loop)
let y=10;
while(y>0){
    console.log(y);
    y--;
}

// ques:5 (even number from 1-20 using for loop)
for(a=1;a<21;a++){
    if(a%2===0){
        console.log(a);
    }
}

// ques:6 odd numbers
let b=1;
while(b<21){
    if(b%2===1){
        console.log(b);
    }
    b++;
}

// Ques:7 table of 5
 for(let c=1;c<11;c++){
    console.log(`5*${c}=${5*c}`); //console.log(5*c);
 }

 //ques:8 sum of numbers from 1-100 using for loop
let sum=0;
for(let i=1;i<101;i++){
    sum=sum+i;
}
console.log(sum);

// ques:9 number between 1-50 divisible by 3
for(let i=1;i<51;i++){
    if(i%3===0){
        console.log(i);
    }
}

// ques:10 Ask user for number and print whether each number from 1 to that number is even or odd.
let val=prompt("give a number");
for( let i=1;i<val;i++){
    if (i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

// ques:11 Count how many times numbers between 1-100 are divisible by both 3 and 5.
for(let i=1;i<101;i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}

// ques:12 Stop at first multiple of 7
/*
Write a loop from 1-100 taht"
1. print each number
2. stops completely when it finds the first number divisible by 7
*/
for(let i=1;i<101;i++){
    console.log(i);
    if(i===7){
        break;
    }
}

// ques:13 skip multiplies of 3
for(let i=1;i<212;i++){
    if(i%3===0) continue;
    console.log(i);
}

/* ques:14 Print first 5 add numbers only
write a loop from 1 to 100 that;
1. print only 5 odd numbers
2. then stops the loop
use both is, continue and a counter break
*/
let count=0;
for(let i=1; i<101;i++){
    if(i%2===1){
        count++;
        console.log(i);
    }
    if(count===5)break;
}
