let input = document.querySelector("input");
let postbutton = document.querySelector(".post_btn");
let textoutput = document.querySelector(".text_output");
let editbutton = document.querySelector(".edit_btn") 
 
let taskArr = [];







postbutton.addEventListener("click", function () {
  taskArr.push(input.value);
  displayUpdate()


  input.value = "";
});
function displayUpdate() {
    textoutput.innerHTML = "";
    taskArr.map((task) => {
      textoutput.innerHTML += `<p> ${task}</p>`;
    });


    let clearbutton = document.querySelectorAll(".clear_btn")

    let clearArr = Array.from(clearbutton)

  
  clearArr.map((clear,) => {
    clear.addEventListener("click", function(){
        
        console.log("clearbutton");
        taskArr.splice(0,1)
        displayUpdate()
        console.log(taskArr);
        

})
  })
}






