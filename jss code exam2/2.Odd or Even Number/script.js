
const input = prompt("Give the Number:");
const num = parseInt(input);


if(isNaN(num)){
    console.log("enter the valid number");
    
}else{
    checkOddOrEven(num)
}``

function checkOddOrEven(number){
    if(number % 2 === 0){
        console.log(number + " is Even Number")
    }else{
        console.log(number + " is Odd number")
    }
}

