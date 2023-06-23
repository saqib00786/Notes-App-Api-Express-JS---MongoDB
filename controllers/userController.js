
import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error('User already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

    res.status(200).json('Register User');
})


export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const getUser = await User.findOne({ email });
    if (getUser && (await bcrypt.compare(password, getUser.password))) {
        const token = jwt.sign({
            user: {
                _id: getUser._id,
                name: getUser.name,
                email: getUser.email
            }
        }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ token });
    } else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
    res.status(200).json('Login User');
})


export const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200).json('Get Current User');
})