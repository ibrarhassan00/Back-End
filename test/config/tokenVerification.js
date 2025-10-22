import 'dotenv/config';
import jwt from "jsonwebtoken";

const tokenVerification = (request,response,next)=>{
    try {
        
    
    if(request.headers?.authorization){
    const token = request.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded){
        console.log(token);
         next()
    }
    
    
    }else{
        response.status(403).send({ status : 402 , message : "Token notfound"})
    }
} catch (error) {
     
        response.status(403).send({ status : 402 , message : "Token Incorrect"})
       
    }
}

export default tokenVerification;