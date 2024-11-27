let input = document.querySelector("input");
let postbutton = document.querySelector(".post_btn");
let textoutput = document.querySelector(".text_output");
let editbutton = document.querySelector(".edit_btn") 
let clearbutton = document.querySelector(".clear_btn") 
let taskArr = [];







postbutton.addEventListener("click", function () {
  taskArr.push(input.value);
  textoutput.innerHTML = "";
  taskArr.map((task) => {
    textoutput.innerHTML += `<p>${task}</p>`;
  });

  input.value = "";
});

    clearbutton.addEventListener("click", function(){
    textoutput.innerHTML = "";
    input.value = "";
    
})
