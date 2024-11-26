let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)



arr.map((item)=>{
 let userNumber = item.innerHTML

 item.innerHTML = ""

let startCount = 0

function counterjs(){
    startCount++
    item.innerHTML = startCount
    

    if(userNumber == startCount){
        clearInterval(stop)
    }
}

let stop = setInterval(()=>{
    counterjs()
},5)
})






