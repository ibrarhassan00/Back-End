import http from "http";

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log("request", request.url);
  //   console.log("response");
  //   response.end("HEllo WORld");
  if (request.url === "/") {
    response.end("HOME");
  } else if (request.url === "/about") {
    response.end("About");
  } else if (request.url === "/contact") {
    response.end("Contact");
  } else {
    response.end("Page not found! 404");
  }
});

server.listen(PORT, () => console.log(`server running`));