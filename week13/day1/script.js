const http = require(`http`);

const server = http.createServer((req, res) => {
  res.end(`hello world from the server`);
});
server.listen(5000, `localhost`, () => {
  console.log(`server is listening at locahost on port 5000`);
});
