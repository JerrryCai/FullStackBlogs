import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: {
      type: String,
      default: 'cai@gmail.com',
    },
    category: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.model('Blog', BlogSchema);
