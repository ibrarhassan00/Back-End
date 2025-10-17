import express, { request, response } from "express"
import { product } from "./product.js"

const app = express()
let PORT = 5000;

app.get("/", (request, response) => {

    response.send("this is home page")

})

//All Products
app.get("/product", (request, response) => {
    response.send(product)
})

//Single Products
app.get("/product/:id", (request, response) => {

    let findProduct = product.find((obj) => {
        if (request.params.id == obj.id) {
            return obj
        } else {
            false
        }
    })
    if (findProduct) {
        response.send(findProduct)
    } else {
        response.send("Product not found")
    }

})

//query param

//http://localhost:5000/user                 >> {} empty object
//http://localhost:5000/user/?filter=red     >> { filter: `red`}

app.get("/user" , (request , response) =>{
response.send("API Fatch")
console.log(request.query);
})

///products/45?sort=price&color=black
// 45 → ye product id hai (param). Matlab: “mujhe product number 45 dikhana.”
// sort=price → ye query param hai. Matlab: “isko price ke hisaab se arrange karke dikhana.”
// color=black → ek aur query param. Matlab: “sirf black color me hi dikhana.”




app.listen(PORT, () => {
    console.log("serverin is running");
})