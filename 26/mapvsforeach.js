const arr = [2, 3, 4, 5];

const map = arr.map((arr) => {
  return arr + 2;
});
const foreach = arr.forEach((arr, index) => {
  arr[index] = arr + 5;
});
console.log(map, "for", foreach, arr);
