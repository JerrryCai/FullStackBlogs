import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    // The super() function is used to call
    // the constructor of the parent Error class and pass the message parameter.
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
