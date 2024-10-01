import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    uname: {
        type: String,
        required: [true, "Name is required"],
        // unique: true
    },
    umobno: {
        type: Number,
        required: [true, "Mob No is Required"],

    },
    uemail: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', "Female"]
    },
    uaddesss: String
})

export const User = mongoose.model("User", userSchema)


// {
//     "uname": "ashish",
//     "umobno": 323435345,
//     "uemail": "asds@gmail.com",
//     "uaddesss": "Bsl"
// }