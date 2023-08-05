//promise.all - its takes bunch of promises and resolve all of them
//if all of them resloved its gonna returned array with all of the resloved result
//if any one the promise fails all promise goning to fail

function showtext(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}
Promise.all([showtext("hellow", 1000), Promise.resolve("hi")]).then((value) =>
  console.log(value)
);
