import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB ConnectedX: ${connect.connection.host}`);

    } catch (error) { 
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}


