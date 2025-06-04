// reduce()

const marks = [78, 89, 90, 96, 99, 96];

const sum = marks.reduce((res, currVal) => {
  return(res + currVal) ;
});

console.log(sum);

const avg = marks.reduce((res,val){
  return res + val;
})/marks.length;

const max = marks.reduce((res,val){
  return res < val ? res : curr;
})

console.log(max);
