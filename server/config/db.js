import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbURL)
        console.log("MongoDB connected");        
    } catch (error) {
        console.error(error);
    }
}

export default connectDB