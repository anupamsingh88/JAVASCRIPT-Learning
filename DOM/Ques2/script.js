let Body = document.querySelector("body")
Body.style.display = "flex"
Body.style.height = "100vh"
Body.style.justifyContent = "center"
Body.style.alignItems = "center"



let btn = document.createElement("button")
btn.style.backgroundColor = "red"
btn.style.color = "white"
btn.innerText ="Click me"

Body.appendChild(btn);