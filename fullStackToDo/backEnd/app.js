import express, { request, response } from "express"
import mongoose from "mongoose";
import TodoModel from "./models/todoSchema.js";
import cors from "cors"

const app = express();
//Body Parsel
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
//Serval Port
const PORT = 5000;
//DB URI
const URI = "mongodb+srv://ibrarhassanansari_db_user:new123@cluster0.5figdhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//DB connected
mongoose.connect(URI).then(()=>{console.log("mongoDB is connected")})
.catch((err)=>{console.log("mongoDb Error",err.message);})


//Home
app.get("/",(request,response)=>{
    response.json({
        message:"The Home Page"
    })
})

//Create API
app.post("/createtodo" ,async(requset,response)=>{
try {
const body = requset.body;
const data = await TodoModel.create(body);
response.json({
    message : "User successfully created",
    data:data,
    status : true
})    
} catch (error) {
    response.json({
        message : error.message,
        status : false
    })
}

})

//Read API
app.get("/gettodo" ,async(request,response)=>{
try {
    const data = await TodoModel.find().sort({"createAt":-1})
    console.log(data);
    
    response.json({
    message : "Todo successfully Get",
    data:data,
    status : true
}) 
} catch (error) {
    response.json({
        message:error.message,
        status:false
    })
}

})

//Update API
app.put("/updatetodo/:id",async(requset,response)=>{
try {
    const todoId =requset.params.id;
    const body = requset.body; 
    const updateData = await TodoModel.findByIdAndUpdate(todoId,body,{new:true})
    response.json({
        message:"Todo Update SuccessFully",
        data:updateData,
        status:true
    })
    console.log(updateData);
} catch (error) {
    response.json({
        message:error.message,
        status:false
    })
}
})
//Delete API
app.delete("/deletetodo",async(request,response)=>{
    try {
        await TodoModel.findByIdAndDelete(request.query.id)
        response.json({
            message:"SuccessFully Deleted",
            status:true
        })
    } catch (error) {
        response.json({
            message:error.message,
            status:false
        })
    }
})
// app.delete("/deletetodo")



app.listen(PORT , ()=>{console.log(`server running on http://localhost:${PORT}`)})