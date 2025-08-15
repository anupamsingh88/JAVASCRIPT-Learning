const para= "Hello i am Cristiano Ronaldo";
const chpara = para.replace("Cristiano Ronaldo",'G.O.A.T');
// console.log(chpara)
console.log(para)

// Using regular expression and modifiers

const rep = /hello/i; // i is for case insensitive
console.log(para.replace(rep,'Hii'));