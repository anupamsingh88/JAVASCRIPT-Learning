const marks = [85,97,44,37,76,60]

let sum = 0;
for (let i=0;i<marks.length;i++){
    sum += marks[i];
}
console.log(sum);

let avg = sum/marks.length;
console.log(`Sum of marks of class= ${sum}`);
console.log(`Average marks of class= ${avg}`);
