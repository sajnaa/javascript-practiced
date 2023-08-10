// let name = "12121";

// let right = name.length - 1;
// function palindrome(input) {
//   for (let left = 0; left < right; left++) {
//     if (name[left] !== name[right]) {
//       return false;
//     }
//     right--;
//     return true;
//   }
// }
// console.log(palindrome(name));

// function palin(name) {
//   return name === name.split("").reverse().join("");
// }
// console.log(palin("sajna"));
// function largestOfFour(arr) {
//   return arr.map(function (group) {
//     console.log(group);
//     return group.reduce(function (prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );
// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [-1, 4, 5, 6, 14];

// //common value
// const result = ar1.filter((a) => ar2.includes(a));

//two array unique element and avoid duplicat and sort
// function diffArray(arr1, arr2) {
//   const newArr = arr1.filter((n) => arr2.indexOf(n) === -1);
//   const newArr2 = arr2.filter((n) => arr1.indexOf(n) === -1);
//   const res = newArr.concat(newArr2);
//   const result = Array.from(new Set(res)).sort();
//   return result;
// }
// console.log(diffArray(ar1, ar2));

// //rempve duplicat value
// let val = ar1.concat(ar2);
// let outputArray = Array.from(new Set(val));
// console.log(outputArray);

var a = 10;
var b = "10";

//word count
// let str = "the cartoon was nice";

// function aa(word) {
//   const result1 = word.trim().split("").length;
//   return result1;
// }
// console.log(aa(str));

// let employee = [
//   {
//     name: "sudha",
//     age: 30,
//     salary: 200000,
//   },
//   {
//     name: "saha",
//     age: 40,
//     salary: 150000,
//   },
//   {
//     name: "samee",
//     age: 50,
//     salary: 300000,
//   },
//   {
//     name: "abdu",
//     age: 60,
//     salary: 400000,
//   },
//   {
//     name: "reka",
//     age: 70,
//     salary: 250000,
//   },
// ];
// let newArr = [];
// employee.forEach((arr) => {
//   newArr.push(arr.salary);
// });
// const result = newArr.reduce((a, b) => a + b);
// console.log(result);
