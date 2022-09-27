let buttons = document.getElementsByClassName(btn)

let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let svar = document.getElementById("svar")
let anvInput = document.getElementById("anv-input")


buttons.addEventListener("click", () =>{
    console.log(+btn1.innerHTML + +btn2.innerHTML)
    
})



