import 'express-async-errors';
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(cors());

import blogRouter from './routes/blogRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/blogs', blogRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
