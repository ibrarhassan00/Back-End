import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, "please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "please Enter Product Price"],
        maxLength: [7, "Price cannot exceed 7 digits"],
       
    },
     ratings:{
            type:Number,
            default:0
    },
    image: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    category:{
    type: String,
    required: [true, "please Enter Product Category"]
    },
    stock:{
        type: Number,
    required: [true, "please Enter Product stock"],
    maxLength: [5, "Quantity cannot exceed 5 digits"],
    default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                 type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }

})

export default mongoose.model("Product",productShema)