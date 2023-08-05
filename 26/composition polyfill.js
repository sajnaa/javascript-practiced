function addfive(a) {
  return a + 5;
}
function substractiontwo(a) {
  return a - 2;
}
function multiplyfour(a) {
  return a * 4;
}
const compose = (...functions) => {
  return (value) => {
    console.log(value);
    return functions.reduceRight(
      (currentValue, currentFunction) => currentFunction(currentValue),
      value
    );
  };
};

const evaluate = compose(addfive, substractiontwo, multiplyfour);
console.log(evaluate(5));

const pipe =
  (...functions) =>
  (value) => {
    console.log("value", value);

    return functions.reduce((currentValue, currentFunction) => {
      console.log(currentValue, "sfcffr", currentFunction);
      return currentFunction(currentValue);
    }, value);
  };
const evaluatepipe = pipe(addfive, substractiontwo, multiplyfour);

console.log("evaluatepipe", evaluatepipe(5));
