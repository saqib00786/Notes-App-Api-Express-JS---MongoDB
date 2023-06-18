import asyncHandler from 'express-async-handler';
// @desc GET all notes
//@Route GET /api/notes
//@access Public

export const getAllNotes = asyncHandler(async (req, res) => {
    res.status(200).send('Get All Notes');
});

// @desc GET all notes
//@Route GET /api/notes
//@access Public

export const getSingleNote = asyncHandler(async (req, res) => {
    res.status(200).send('Get Single Note');
});

// @desc Create a new note
//@Route POST /api/notes
//@access Public

export const createNote = asyncHandler(async (req, res) => {
    const { name } = req.body

    if (!name) {
        res.status(400).send('Please provide a name');
    }
    res.status(201).send('Save Note');
})

// @desc Create a new note
//@Route PUT /api/notes
//@access Public

export const updateNote = asyncHandler(async (req, res) => {
    res.status(200).send('Update Note');
});

// @desc Create a new note
//@Route DELETE /api/notes
//@access Public

export const deleteNote = asyncHandler(async (req, res) => {
    res.status(200).send('Delete Note');
});
