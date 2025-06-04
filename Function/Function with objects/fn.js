//function with object

const user = {
    username:"Anupam",
    age:22,
    height:"5'5",
}

function getobj(AnyOBJ){
    console.log(`User ${AnyOBJ.username}, age is ${AnyOBJ.age}`)
}

getobj(user)

// function array

const arr = [1,2,3,4,5]

function getArr(anyarr){
     console.log(`At index 0 the element is ${anyarr[0]}`)
}

getArr(arr)

