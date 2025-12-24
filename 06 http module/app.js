const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Hello world</h1>');
  }
  res.end();
});

server.listen(5000);
console.log(`The HTTP Server is running on port 5000`);