import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { NotFoundError, InvalidIdError, RequiredFieldsLoanError } from '../errors';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  if (err instanceof InvalidIdError) {
    return res.status(400).json({ message: err.message });
  }
  if (err instanceof RequiredFieldsLoanError) {
    return res.status(400).json({ message: err.message });
  }
  if (err instanceof Error.ValidationError) {
    return res.status(400).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'Something went wrong!' });
}
