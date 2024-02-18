const { hello, bye, stuff } = require("./greeting.js");
const slugify = require("slugify");

console.log(slugify("My New Web Site", `$`));
hello(`steve`);
bye(`greg`);
console.log(stuff);
