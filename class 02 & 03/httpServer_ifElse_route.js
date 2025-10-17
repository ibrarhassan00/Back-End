//Node per jo file pakg.jason sy connect hoti hai wo hi run hoti 
//Before run this file please connect to pakg.jason

import http from "http"
let port = 3000;

let server = http.createServer((request, response) => {

    if (request.url == "/") {
        response.end("Hello this is home page")
    } else if (request.url == "/about") {
        response.end("Hello this is about page")
    } else if (request.url == "/contact") {
        response.end("Hello this is contact page")
    }else{
    response.end("Page not found! 404");
  }

})

server.listen(port, () => {
    console.log("server is running");
})


