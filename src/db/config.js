import e from "express";
import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const connectiondata = await mongoose.connect("mongodb://localhost:27017/sampledb")
        console.log("Connection Successfull", connectiondata.connection.name);
    } catch (error) {
        console.log(error);
    }
}

export { connectToDb }