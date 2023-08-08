// hacker ank

// function sumPrimes(num) {
//   function checkprime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i == 0) return false;
//     }
//     return true;
//   }
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (checkprime(i)) sum += i;
//   }
//   console.log(sum);
//   return sum;
// }

// const sym1 = (...args) => {
//   // Merge all the different arrays and remove duplicate elements it means
//   //   elements that are present both on two related arrays
//   let tab = args.reduce(
//     (a, b) => [
//       ...a.filter((i) => !b.includes(i)),
//       ...b.filter((j) => !a.includes(j)),
//     ],
//     []
//   );
//   // Then remove the rest of duplicated values and sort the obtained array
//   return Array.from(new Set(tab)).sort((a, b) => a - b);
// };

// different num
function sym(arr1, arr2) {
  const result = [...arr1, ...arr2];
  return result
    .filter((v) => {
      if (arr1.includes(v) !== arr2.includes(v)) {
        return v;
      }
    })
    .sort();
}
//common
function common(arr1, arr2) {
  console.log(arr1.filter((n) => !arr2.includes(n))); //total count of diff num
  return arr1.filter((n) => arr2.includes(n)).sort();
}
console.log(common([1, 2, 3], [5, 2, 1, 4]));
//1,2,3,2,1
//5,2,1,4,
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym1([1, 2, 3], [5, 2, 1, 4]));

//particular value is there are not

const val = [1, 2, 5, 2, 3, 3];

let arr = ["apple", "mango", "apple", "orange", "orange", "mango"];

function removeDuplicates(data) {
  return data.filter((item, index) => data.indexOf(item) !== index);
}
console.log(removeDuplicates(arr));

// let str = "A$computer$science$portal$for$Geeks";

// function gfg_Run() {
//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "$") {
//       newStr += "_";
//     } else {
//       newStr += str[i];
//     }
//   }
//   console.log(newStr);
// }

// gfg_Run();

let check = (chr) => `&\/#, +()$~%.'":*?<>{}`.includes(chr);

let str = "This, is# GeeksForGeeks!";

let underscore_str = [...str].reduce(
  (s, c) => (check(c) ? s + "_" : s + c),
  ""
);

console.log(underscore_str);
// 0 1 2 3 4 5 6 7 8 9 10
// let name = "ha ng ma nS tr in g"; //n-2 m-4 n-6 t-8 i g //
// let changename = "";
// for (let i = 0; i < name.length; i++) {
//     if (name.indexOf(name[i]) % 2 == 0) {

//     console.log(name.indexOf(name[i]) % 2 == 0);
//   // changename += "_";
//    }
//   //   else {
//   //     changename += name[i];
//   //   }
//   //   console.log(changename);
// }

// Given is a string hangmanString. Replace every
//  second letter with an underscore and return the result as a string. The first character must be an underscore.
// let name = "hangmanString";
// let result = "";
// for (let i = 0; i < name.length; i++) {
//   if (i % 2 == 0) {
//     result += "_" + name[i];
//   } else {
//     result += name[i];
//   }
// }
// console.log(result);
