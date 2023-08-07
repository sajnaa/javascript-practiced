// let arr = [1, 2, 3, 4, 5, 3, 2, 5];

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// var array1 = [1, 2, 3, 4];
// var array2 = [5, 6, 7, 8];
// let result = array1.map((item, index) => {
//   return (item += array2[index]);
// });
// console.log(result);
// let arr = [100, -15,  -30, -50, -10, 50, 200, 300];

// let newarr = arr.sort((a, b) => a - b);

// // console.log(newarr);

// let secondLowest = arr[1];

// let reversedArr = arr.reverse();

// let secondGreatest = reversedArr[1];

// console.log([secondLowest, secondGreatest]);
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let a of arr1) {
//     if (!arr2.includes(a)) {
//       newArr.push(a);
//     }
//   }
//   for (let b of arr2) {
//     if (!arr1.includes(b)) {
//       newArr.push(b);
//     }
//   }
//   return newArr;
// }
// [1, 2, 3, [3, 4, 5]];
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// function diffArray(arr1, arr2) {
//   //   const newArr = arr1
//   //     .concat(arr2)
//   //     .filter((n) => arr1.includes(n) && arr2.includes(n));
//   //   console.log(newArr);
//   //   const newArr = arr1.filter((n) => arr2.includes(n));
//   const newArr = arr1.filter((n, index) => arr1.indexOf(n) === index);
//   return newArr;
// }
// function regularfun() {
//   console.log(this);
// }
// const arr = () => {
//   console.log(this);
// };
// let object = {
//   name: "sajna",
//   fun1: regularfun,
//   fun2: arr,
// };
// regularfun();
// arr();
// object.fun1();
// object.fun2();

// function myReplace(str, before, after) {
//   let replace = str.replace(before, after);
//   let split = replace[0].toUpperCase() + replace.substring(1);
//   console.log(split);
//   return replace;
// }

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
// );

// function myReplace(str, before, after) {
//   console.log(before.charAt(0).toUpperCase());
//   const aftercase =
//     before.charAt(0) === before.charAt(0).toUpperCase()
//       ? after.charAt(0).toUpperCase() + after.slice(1)
//       : after.charAt(0).toLowerCase() + after.slice(1);
//   const result = str.replace(before, aftercase);
//   console.log(result);
//   return result;
// }
// myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

// var arr = [50, 40, 60, 1, 10, 5];
// var max = arr.sort(function (a, b) {
//   console.log(a, b);
//   return a - b;
// });
// console.log(max);

// let text = "Hello world, welcome to the universe.";
// console.log(text.indexOf("e"));
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let a of arr1) {
//     if (!arr2.includes(a)) {
//       newArr.push(a);
//     }
//   }
//   for (let b of arr2) {
//     if (!arr1.includes(b)) {
//       newArr.push(b);
//     }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

let text = [1, 2, 3, 4, 5];
let result = text.includes(59);
console.log(result);
