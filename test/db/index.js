import mongoose from "mongoose";
import 'dotenv/config';


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWARD}@cluster0.8itkd1g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri)

export default mongoose;