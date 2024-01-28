const timeOut = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 4000);
});
timeOut.then((data) => console.log(data));
