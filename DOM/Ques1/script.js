let divs= document.querySelectorAll("div");

let ind =1;

divs.forEach(val => {
    val.innerText=`This is div ${ind}`;
    ind++;
})