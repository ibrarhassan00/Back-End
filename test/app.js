import express from "express"

const app = express()
const PORT = 5000;

app.get("/",(request,response)=>{
    response.send("this is home page")
})

app.get("/getuser" , (request,response)=>{
response.send("this is get user page")
})



app.listen(PORT , ()=>{console.log(`server in running on http://localhost${PORT}`)})