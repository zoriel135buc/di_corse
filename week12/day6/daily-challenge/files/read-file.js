const fs = require(`fs`);
fs.readFile(`file-data.txt`, `utf8`, function (err, data) {
  console.log(data);
});
console.log("readFile called");
