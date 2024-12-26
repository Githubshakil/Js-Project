let principal = 1000;
let rate =9;
let time = 36;

let interest = calculateSimpleInterest(principal,rate,time);


function calculateSimpleInterest(principal,rate,time){
    let interest = (principal*rate*time)/100;
    return interest;
}



console.log("Interest rate:" + interest);

