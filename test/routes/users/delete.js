import User from "../../models/user/index.js";


const deleteUser = async (request,response)=>{
try {
    const {id} = request.params;
await User.findByIdAndDelete(id);

response.status(200).send({
    status:200,
    message : "user has been deleted"
})

} catch (error) {
    response.status(500).send({status : 500})
}
}

export default deleteUser;