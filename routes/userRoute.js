import express from 'express';
const router = express.Router();


router.route('/register').get(getAllNotes);
router.route('/login').post(createNote);
router.route('/current').get(getSingleNote);

export default router;
