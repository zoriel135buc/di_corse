const myPromise = Promise.resolve(3).then((value) => {
  console.log(value);
});
const twoPromise = Promise.reject("boo").catch((rej) => console.log(rej));
