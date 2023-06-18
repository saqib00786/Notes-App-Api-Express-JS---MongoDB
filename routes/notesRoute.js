import express from 'express';
const router = express.Router();
import { createNote, getAllNotes, getSingleNote, updateNote, deleteNote } from '../controllers/notesController.js';

router.route('/')
  .get(getAllNotes)
  .post(createNote);

router.route('/:id')
  .get(getSingleNote)
  .put(updateNote)
  .delete(deleteNote);

/* router.route('/').get(getAllNotes);
router.route('/').post(createNote);
router.route('/:id').get(getSingleNote);
router.route('/:id').put(updateNote);
router.route('/:id').delete(deleteNote); */

export default router;
