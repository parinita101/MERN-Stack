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