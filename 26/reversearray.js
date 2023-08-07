// let ar = [1, 2, 3];

// for (let i = ar.length; i >= 0; i--) {
//   console.log(ar[i]);
// }

// //string

// let name = "sajna";
// let reverse = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   let char = name[i];
//   reverse += char;
// }
// console.log(reverse);

// let num = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 3; j++) {
//     console.log(num[i][j]);
//   }
// }

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let add = [...ar1, ...ar2];
let con = ar1.concat(ar2);
console.log(add);
console.log(con);

// Find elements which are present in first array and not in second

// Function for finding elements
// which are there in a[] but not
// in b[].
function findMissing(a, b, n, m) {
  for (let i = 0; i < n; i++) {
    let j;

    for (j = 0; j < m; j++) if (a[i] == b[j]) break;

    if (j == m) document.write(a[i] + " ");
  }
}

// Driver Code
let a = [1, 2, 6, 3, 4, 5];
let b = [2, 4, 3, 1, 0];
let n = a.length;
let m = b.length;
findMissing(a, b, n, m);
