// Creating a simple Bmi calculator function which takes weight(kg) and height(m^2)
function bmical(weight,height){
    let bmi = weight/height;
    return Math.floor(bmi);
} 

function weight(kg){
    return kg;
}

function height(m){
    console.log(`Your height is ${m}meter`);
    
    return m*m;
}

console.log(bmical(65,1.8));
