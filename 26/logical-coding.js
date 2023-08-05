// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) console.log(i);
// }

// // Print all the multiplication tables with numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   let row = "7 * " + i + " = " + 7 * i;
//   console.log(row);
// }

// for (let a = 1; a <= 10; a++) {
//   for (let b = 1; b <= 10; b++) {
//     console.log(a * b);
//   }
// }

// // Calculate the sum of numbers from 1 to 10
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log(sum);

// // Coding challenge #6: Calculate 10!

// let prod = 1;

// for (let i = 1; i <= 10; i++) {
//   prod *= i;
// }

// console.log(prod);

// // Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;

// for (let i = 11; i <= 30; i += 2) {
//   sum += i;
// }

// console.log(sum);

// // Calculate the sum of numbers in an array of numbers

// function sumArray(ar) {
//   let sum = 0;

//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }

//   return sum;
// }

// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let sum = sumArray(ar);
// console.log(sum);

//settimeout runs after the complete code run successfully
function a() {
  for (var i = 0; i < 3; i++) {
    //0,1,2,3 so var always taken last value
    setTimeout(function () {
      console.log(i); // log is 3 because var is a function scope
    }, i * 1000);
  }
}
a();

// // var
// var a = 10;
// var b = 3;
// console.log(a); //o/p 3

//flat an array
// let arr = [
//   [2, 3],
//   [-1, 5],
//   [7, 9],
//   [4, 5, [4, 2, [3, 5, 6, [7, 5]]]],
// ];

// console.log(arr.flat(4));

// let arr = [
//   [2, 3],
//   [-1, 5],
//   [7, 9],
//   [4, 5, [4, 2, [3, 5, 6, [7, 5]]]],
// ];

// function flat(arr, depth = 1) {
//   let result = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element) && depth > 0) {
//       result.push(...flat(element, depth - 1));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// console.log(flat(arr, 4));
