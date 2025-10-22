import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const postUser = async (request,response)=>{

    try {
const password = bcrypt.hashSync(request.body.password, 10);
 
console.log("res" , request.body);
var token = jwt.sign({ email : user.email }, process.env.JWT_SECRET);
response.status(201).send({status : 201 , token})
    
    } catch (error) {
        response.status(500).send({status : 500,
            message:error
        })
    }
}


export default postUser;