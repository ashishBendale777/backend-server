import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    uname: String,
    umobno: Number,
    uemail: String,
    uaddesss: String
})

export const User = mongoose.model("User", userSchema)


// {
//     "uname": "ashish",
//     "umobno": 323435345,
//     "uemail": "asds@gmail.com",
//     "uaddesss": "Bsl"
// }