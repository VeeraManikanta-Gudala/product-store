import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import { mongo } from 'mongoose';
dotenv.config();
export const connectDB = async() => {
    try{
        const con= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }

}