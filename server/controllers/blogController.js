import BlogSchema from '../models/blogModel.js';

export const getAllBlogs = async (req, res) => {
  const blogs = await BlogSchema.find({});
  res.status(200).json({ blogs });
};

export const createBlog = async (req, res) => {
  const blog = await BlogSchema.create(req.body);

  res.status(201).json({ blog });
};

export const getBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await BlogSchema.findById(id);
  if (!blog) {
    return res.status(404).json({ message: `no blog found with id ${id}` });
  }
  res.status(200).json({ blog });
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await BlogSchema.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedBlog) {
    return res.status(404).json({ message: `no blog found with id ${id}` });
  }
  res.status(200).json({ message: 'blog modified', blog: updatedBlog });
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const deletedBlog = await BlogSchema.findByIdAndDelete(id);
  if (!deletedBlog) {
    return res.status(404).json({ message: `no blog found with id ${id}` });
  }

  res.status(200).json({ message: 'blog deleted' });
};
