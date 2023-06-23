import express from 'express';
import { getCurrentUser, loginUser, registerUser } from '../controllers/userController.js';
import { validateUserToken } from '../middleware/validateUserToken.js';
const userRouter = express.Router();


userRouter.route('/register').post(registerUser);
userRouter.route('/login').post(loginUser);
userRouter.route('/current').get(validateUserToken,getCurrentUser);


// userRouter.route('/current',(req, res) => {

// });

export default userRouter;
