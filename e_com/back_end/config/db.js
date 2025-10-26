import mongoose from "mongoose";


export const connectMongoDatabase = ()=>{
mongoose.connect(process.env.DB_URI)
.then((data)=>{
    console.log(`MongoDB Connected with server
        ${data.connection.host}`);    
})
.catch((error)=>{
    console.log(error.message);
    
})
}


