import { User } from "../models/UserSchema.js";


const addUser = async (req, res) => {
    console.log(req.body);
    try {
        const addedUser = await User.create(req.body)
        res.status(200).json(addedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}


const deleteUser = async (req, res) => {
    try {
        let userid = req.body.userid
        const deletedUser = await User.findByIdAndDelete(userid)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser = async (req, res) => {
    try {
        let uodatedUser = await User.findByIdAndUpdate({ _id: req.body.userid },
            {
                uemail: req.body.uemail
            }, { new: false })

        res.status(200).json(uodatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export { addUser, getAllUsers, deleteUser, updateUser }