let btn = document.querySelector(".btn")
let body = document.querySelector("body")

btn.addEventListener("click",(event)=>{
    let div = document.createElement("div")
    div.className = "box"
    div.innerText = "You are not a gay, but still you are the dumbest person in the world";
    body.appendChild(div)
})
