import express from "express"
import router from "./routes/index.js"
import mongoose from "./db/index.js";

const app = express()
const PORT = 5000;
app.use(express.json())

mongoose.connection.on('open',()=>{
    console.log('DataBase Connected');
})
mongoose.connection.on('error',(err)=>{
    console.log('DataBase err' , err);
})


app.use("/api" , router )


app.listen(PORT , ()=>{console.log(`server in running on http://localhost${PORT}`)})