import express from "express"
import postUser from "./post.js";
import getUsers from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./put.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
const router = express.Router();


router.post('/', postUser )
router.post('/login', loginUser )
router.get('/', tokenVerification ,getUsers )
router.delete('/:id', deleteUser )
router.put('/:id', updateUser )

export default router;