//Filter out marks>90 from an array of marks

const marks = [78, 89, 90, 96, 99, 96];

let greaterMarks = marks.filter((val) => {
  return val > 90;
});
// console.log(greaterMarks);

function evenArr(val) {
  return val % 2 === 0;
}

console.log(marks.filter(evenArr));