import asyncHandler from 'express-async-handler';
import { Todo } from '../models/todoModel.js';
// @desc GET all notes
//@Route GET /api/notes
//@access Public

export const getAllNotes = asyncHandler(async (req, res) => {
    res.status(200).json('Get All Notes');
});

// @desc GET all notes
//@Route GET /api/notes
//@access Public

export const getSingleNote = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        res.status(404)
        throw new Error('Note not found')
    }
    res.status(200).json(todo);
});

// @desc Create a new note
//@Route POST /api/notes
//@access Public

export const createNote = asyncHandler(async (req, res) => {
    const { title, description, priority } = req.body

    if (!title || !description) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const note = await Todo.create({
        title,
        description,
        priority
    })
    res.status(201).json(note);
})

// @desc Create a new note
//@Route PUT /api/notes
//@access Public

export const updateNote = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        res.status(404)
        throw new Error('Note not found')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedTodo);
});

// @desc Create a new note
//@Route DELETE /api/notes
//@access Public

export const deleteNote = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        res.status(404)
        throw new Error('Note not found')
    }

    await Todo.remove()
    res.status(200).json(todo);
});
