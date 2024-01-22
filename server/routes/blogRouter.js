import { Router } from 'express';
const router = Router();

import {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import {
  validateBlogInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

router.route('/').get(getAllBlogs).post(validateBlogInput, createBlog);
router
  .route('/:id')
  .get(validateIdParam, getBlog)
  .patch(validateBlogInput, validateIdParam, updateBlog)
  .delete(validateIdParam, deleteBlog);

export default router;
