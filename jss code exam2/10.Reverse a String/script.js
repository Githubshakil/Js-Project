let inputstring = "Shakil";
let reserved =reservedstring(inputstring);


function reservedstring(str){
    let reservedstr = "";

    for (let i = str.length -1; i >= 0; i--) {
        reservedstr += str[i];
    }
    return reservedstr
}
document.write( reserved);
