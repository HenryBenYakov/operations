import { Schema, model } from 'mongoose';
import { Operation } from './operations.types';



const operationSchema = new Schema<Operation>(
  {
    accountNumber: {
      type: String,
      required: [true, 'Missing accountNumber'],
      minlength: [2, 'description must be minimum 2 chars'],
      maxlength: [100, 'description cant exceed 100 chars'],
    },
    type: {
      type: String,
      required: [true, 'Missing type'],
    },
    amount: {
      type: Number,
      required: [true, 'Missing amount'],
      min: [1, 'amount cant be negative'],
      max: [2000000, 'amount cant exceed 200000'],
    },
    date: {
      type: String,
      required: [true, 'Missing date'],
      minlength: [1, 'date cant be emepty'],
    },
    interest: {
      type: Number,
      min: [0, 'interest must be above 1'],
      max: [80, 'interest cant exceed 80'],
    },
    payments: {
      type: Number,
      min: [0, 'payments must be above 1'],
      max: [36, 'payments cant exceed 80'],
    },
  },
  { versionKey: false },
);


export const OperationModel = model('OperationModel', operationSchema, 'operations');
