let type = document.querySelector(".type")
let typeContent = type.innerHTML
type.innerHTML = ""
let counter = -1

function typejs(){
    counter++
    type.innerHTML += typeContent.charAt(counter)
    if(counter == typeContent.length){
        type.innerHTML = ""
        counter = -1
    }
    console.log(counter)
}
let stop = setInterval(()=>{
    typejs()
},500)
