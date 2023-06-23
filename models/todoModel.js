import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        require: [true, 'Description is required']
    },
    priority: {
        type: String,
        require: false
    }
}, { timestamps: true });


export const Todo = mongoose.model('Todo', todoSchema);
