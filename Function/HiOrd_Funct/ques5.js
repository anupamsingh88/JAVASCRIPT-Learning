// map()

const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleMarks = marks.map((num) => {
  return num * 2;
});

console.log(doubleMarks);

const cube = marks.map(function (num) {
  return Math.pow(num, 3);
});

console.log(cube);
