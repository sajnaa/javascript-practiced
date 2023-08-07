//max min

// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

// let maxm = ar[0];
// for (let i = 0; i < ar.length; i++) {
//   if (maxm > ar[i]) {
//     maxm = ar[i];
//   }
// }
// console.log(maxm);

// Calculate the sum of digits of a positive integer number
// let sum1 = 1235231;

// let s = sum1.toString();
// let sum = 0;

// for (let char of s) {
//   let digit = parseInt(char);
//   sum += digit;
// }

// console.log("Sum: ", sum);

var ar = [1, 2, 3];

function left(arr) {
  let remove = arr.shift();
  ar.push(remove);
}
left(ar);
console.log(ar);

function right(ar) {
  let remove = ar.pop();
  ar.unshift(remove);
}
right(ar);
console.log(ar);
