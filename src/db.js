import 'dotenv/config'
import mongoose from 'mongoose'
let mongoConnectionStr = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoConnectionStr)
        console.log('>>> DB is connected');
    } catch (error) {
        console.log(error);
    }
}