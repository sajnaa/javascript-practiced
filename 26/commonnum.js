// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [-1, 4, 5, 6, 14];
// let val = [];
// for (let arr of ar1) {
//   if (!ar2.includes(arr)) {
//     val.push(arr);
//   }
// }
// console.log(val);
// let num = "1.2, 3.4, 4.5";
// let split = num.split(",");
// let sum = 0;
// for (let a of split) {
//   sum += parseFloat(a);
// }
// console.log(sum);

// let word = "the name of sajna";

// function upper(str) {
//   let split = str.split(" ");
//   for (let i = 0; i < split.length; i++) {
//     split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
//   }
//   return split.join(" ");
// }
// console.log(upper(word));

// function countword(word) {
//   // let words = word.trim().split(" ").length;
//   let letter = word.trim().split("").length;
//   return letter;
// }
// console.log(countword(word));
// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => {
//     console.log("  arr.indexOf(item)", arr.indexOf(item));
//     console.log("index", index);
//     return arr.indexOf(item) === index;
//   });
// }
// console.log(removeDuplicates(arr));

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// var arr = [50, 40, 60, 0, 10, 5];
// console.log([arr.length - 1]);
// var max = arr.sort((a, b) => a - b)[arr.length - 1];
// console.log([arr.length - 1]);

// console.log(max);

// let result = ar.reduce((acc, cur) => {
//   return (acc += cur);
// }, 0);

// console.log(result);

// let result = arr.filter((arr) => {
//   let val = [];
//   if (arr > 0) {
//     val.push(arr);
//     return val;
//   }
// });
// console.log(result);
// function getPositives(ar) {
//   let ar2 = [];

//   for (let i = 0; i < ar.length; i++) {
//     let el = ar[i];

//     if (el >= 0) {
//       ar2.push(el);
//     }
//   }

//   return ar2;
// }

// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar2 = getPositives(ar);

// console.log(ar2);
