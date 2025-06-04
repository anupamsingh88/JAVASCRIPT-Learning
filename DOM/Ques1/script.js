let divs= document.querySelectorAll("div");
let Body = document.querySelector("body")


 let ind = 1
divs.forEach(val => {
    val.innerText=`This is div ${ind}`;
    ind++;
})

let newdiv = document.createElement("div")
newdiv.innerText = "This is div";
newdiv.className = "box"
newdiv.style.backgroundColor = "aliceblue"

Body.prepend(newdiv)