import { validationResult, body, param } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customerErrors.js';
import mongoose from 'mongoose';
import BlogSchema from '../models/blogModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateBlogInput = withValidationErrors([
  body('title').notEmpty().withMessage('title is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('category').notEmpty().withMessage('category is required'),
  body('content').notEmpty().withMessage('content is required'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('Invalid mongodb id');
    const blog = await BlogSchema.findById(value);
    if (!blog) throw new NotFoundError(`no blog founded with id ${value}`);
  }),
]);
