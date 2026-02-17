import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected successfully !!!
            ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with an error code
    }
}   


export default connectDB;
