import express from "express"
import { addUser, getAllUsers } from "../controllers/UserController.js"


const router = express.Router()

router.post("/adduser", addUser)
router.get("/allusers", getAllUsers)



export { router }