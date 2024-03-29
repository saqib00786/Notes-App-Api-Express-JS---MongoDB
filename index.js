import express from 'express';
import router from './routes/notesRoute.js';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
import { connectDB } from './config/dbConnection.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

connectDB()
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use('/api/notes', router);
app.use('/api/user', userRouter);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
