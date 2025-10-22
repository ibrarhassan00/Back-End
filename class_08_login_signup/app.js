import express, { urlencoded } from "express"
import mongoose from "mongoose";
import UserModel from "./models/userShema.js";
import bcrypt from "bcrypt"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;
const URI = `mongodb+srv://admin12345:admin12345@cluster0.8itkd1g.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI)
.then((res)=>{
    console.log("Connected MongoDB");
})
.catch((err)=>{
    console.log(`MongoDB err ${err}`);
})


app.post(`/signup`,async (req , res)=>{
try {
    const {name,age,email,password} = req.body;

if(!name || !age || !email || !password){
    return res.json({
        status : false,
        message : `Required Fields are missing`

    })
}

const isUserExist = await UserModel.find({email})

if(!isUserExist){

 return res.json({
        status : false,
        message : `Email Id Already Exist`
    })

}

const userObj = {
    name,
    age,
    email,
    password
}

const hash = await bcrypt.hash(password, 10);


const createdUser = await UserModel.create({...userObj , password : hash});
res.send({
        status : true,
        message : `user has been created`,
        user : createdUser
    })
} catch (error) {
    res.send({
        status : false,
        message : error.message,
    })
}
})


app.post(`/login` , async(req,res)=>{
try {
    const {name,age,email,password} = req.body;


if(!email || !password){
    return res.json({
        status : false,
        message : `Required Field Are Missing`
    })
}

//get user by email
const isUserValid = await UserModel.findOne({email})

if(!isUserValid){
     return res.json({
        status : false,
        message : `Email and Password Invalid`
    })
}

    const match = await bcrypt.compare(isUserValid.password,password);

console.log(match);


if (match) {
     return res.json({
        status : false,
        message : `Email and Password Invalid`
    })
}

res.json({
        status : true,
        message : `User Login Successfully`,
        user: isUserValid
    })
} catch (error) {
    res.json({
        status : false,
        message : error.message
    })
}
})

app.listen(PORT , ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
