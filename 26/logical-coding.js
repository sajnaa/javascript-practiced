for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) console.log(i);
}

// Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  let row = "7 * " + i + " = " + 7 * i;
  console.log(row);
}

for (let a = 1; a <= 10; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(a * b);
  }
}

// Calculate the sum of numbers from 1 to 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// Coding challenge #6: Calculate 10!

let prod = 1;

for (let i = 1; i <= 10; i++) {
  prod *= i;
}

console.log(prod);

// Calculate the sum of odd numbers greater than 10 and less than 30
let sum = 0;

for (let i = 11; i <= 30; i += 2) {
  sum += i;
}

console.log(sum);

// Calculate the sum of numbers in an array of numbers

function sumArray(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
console.log(sum);
