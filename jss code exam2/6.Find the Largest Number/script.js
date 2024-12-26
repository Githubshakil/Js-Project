
let input1 = prompt("Enter The first Number")
let input2 = prompt("Enter The second Number")
let input3 = prompt("Enter The thid Number")





function findlargeNumber(num1,num2,num3){
    // let=largestNumber; 
    if(num1 >= num2 && num1 >= num3){
        largest = num1;
    }else if(num2 >= num1 && num2 >= num3){
        largest = num2;
    }else{
        largest = num3;
    }
    return largest;
    
}

let num1 = parseFloat(input1);
let num2 = parseFloat(input2);
let num3 = parseFloat(input3);


if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
    console.log("give to the valid number");
    
}else{
    let largestNumber=findlargeNumber(num1, num2, num3);
    document.write("The largest number is " + largestNumber);
    
}

