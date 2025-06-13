let btn = document.querySelector(".btn")
let div = document.querySelector(".container")

let currentMode = "light"
btn.addEventListener("click",(e)=>{
    if(currentMode==="light"){
        currentMode = "dark"
        // div.style.backgroundColor = "black"
        // btn.style.backgroundColor = "white"
        // btn.style.color = "black"
        btn.classList.add("dark-btn")
        btn.classList.remove("light-btn")
        div.classList.add("dark-div")
        div.classList.remove("light-div")
        
    }
    else{
        currentMode = "light"
        // div.style.backgroundColor = "white"
        // btn.style.backgroundColor = "black"
        // btn.style.color = "aliceblue"
        btn.classList.add("light-btn")
        btn.classList.remove("dark-btn")
        div.classList.add("light-div")
        div.classList.remove("dark-div")
    }
})