import User from "../../models/user/index.js";

const updateUser = async (request,response)=>{
try {
    const {id} = request.params;
    const updatedData = request.body;

await User.findByIdAndUpdate(id , updatedData);

    response.status(200).send({
    status:200,
    message : "user has been updated"
})
} catch (error) {
    response.status(500).send({status : 500})
}
}


export default updateUser;