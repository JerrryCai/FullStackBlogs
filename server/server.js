import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
const app = express();

import blogRouter from './routes/blogRouter.js';
import mongoose from 'mongoose';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/blogs', blogRouter);

// Not found middleware
app.use('*', (req, res) => {
  res.status(404).json({ message: 'not found' });
});

// error middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'something went wrong' });
});

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
