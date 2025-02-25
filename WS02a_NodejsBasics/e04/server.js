const http = require("http");
const port = 3000;

// Create server
// CbFn is invoked every time any query is made to the server
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, World!");
  } else if (request.url === "/about") {
    response.end("About Page");
  } else if (request.url === "/contact") {
    response.end("Contact Page");
  } else {
    response.end("Page not found!");
  }
});

// Make server listen on port 3000
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});
