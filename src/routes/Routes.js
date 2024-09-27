import express from "express"
import { addUser, deleteUser, getAllUsers, updateUser } from "../controllers/UserController.js"


const router = express.Router()

router.post("/adduser", addUser)
router.get("/allusers", getAllUsers)
router.delete("/deleteuser", deleteUser)
router.put("/updateuser", updateUser)



export { router }