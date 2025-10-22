import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
});

const UserModel = mongoose.model('user', userShema); 

export default UserModel;