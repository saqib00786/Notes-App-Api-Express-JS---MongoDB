import express from 'express';
import router from './routes/notesRoute.js';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use('/api/notes', router);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
