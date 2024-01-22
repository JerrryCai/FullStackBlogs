import { NotFoundError } from '../errors/customerErrors.js';
import BlogSchema from '../models/blogModel.js';
import StatusCodes from 'http-status-codes';

export const getAllBlogs = async (req, res) => {
  const blogs = await BlogSchema.find({});
  res.status(StatusCodes.OK).json({ blogs });
};

export const createBlog = async (req, res) => {
  const blog = await BlogSchema.create(req.body);
  res.status(StatusCodes.CREATED).json({ blog });
};

export const getBlog = async (req, res) => {
  const blog = await BlogSchema.findById(req.params.id);
  res.status(StatusCodes.OK).json({ blog });
};

export const updateBlog = async (req, res) => {
  const updatedBlog = await BlogSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ message: 'blog modified', blog: updatedBlog });
};

export const deleteBlog = async (req, res) => {
  const deletedBlog = await BlogSchema.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ message: 'blog deleted' });
};
