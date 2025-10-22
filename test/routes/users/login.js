import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const loginUser = async (request, response) => {
    try {

        const { email, password } = request.body;
        const user = await User.findOne({email:email})
        if (user) {

            const checkPassword = bcrypt.compareSync(password, user.password); // true

            if (checkPassword) {
                var token = jwt.sign({ email : user.email }, process.env.JWT_SECRET);
                response.status(202).send({ status: 202, user, message:"Login Successfull" , token  })
            } else {
                response.status(401).send({ status: 401, message: "incorrect password" })
            }
        } else {
            response.status(404).send({ status: 404, message: "User Not Found" })

        }
        console.log("res", user);

    } catch (error) {
        response.status(500).send({ status: 500, message: error.message })
    }
}


export default loginUser;