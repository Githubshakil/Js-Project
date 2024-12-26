
let num = 11;
let result = calculateFactorial(num)

function  calculateFactorial(number){
    if(number<0){
        return "negative Number"
    }
    let factorial=1;

    for(let i=1; i<=number; i++){
        factorial *= i;
    }
    return factorial;
}

document.write("the factorial of " + num + " is " + result);
