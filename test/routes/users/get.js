import User from "../../models/user/index.js";

const getUsers = async (request,response) =>{
try {
    const users =  await User.find()
console.log("res" , users);
response.status(202).send({status : 202 , users})
    
} catch (error) {
    response.status(500).send({status : 500})
}
}


export default getUsers;