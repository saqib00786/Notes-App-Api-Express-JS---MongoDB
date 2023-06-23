import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Title is required']
    },
    email: {
        type: String,
        require: [true, 'Description is required'],
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    }
}, { timestamps: true });


export const User = mongoose.model('User', userSchema);
