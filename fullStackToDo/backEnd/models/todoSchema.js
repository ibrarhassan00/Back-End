import mongoose, { Types } from "mongoose";

const todoShema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    },
createAt:{
    type : Date,
    default : Date.now
}
})

const TodoModel = mongoose.model("todo" , todoShema);

export default TodoModel;