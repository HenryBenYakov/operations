import express from 'express';
import { GetOperationsOptions, GetOperationsParams, Operation, OperationData } from './operations.types';
import { getOperations, createOperation } from './operations.bl';

export const operationsRouter = express.Router();

operationsRouter.get<{}, Operation[], {}, GetOperationsParams>('/', async (req, res, next) => {
  try {
    const accountNumber = req.query.accountNumber

    const operations = await getOperations({ accountNumber });
    return res.status(200).json(operations);
  } catch (err) {
    next(err);
  }
});


operationsRouter.post<{}, Operation, OperationData>('/', async (req, res, next) => {
  try {
    const operation = await createOperation(req.body);
    return res.status(201).json(operation);
  } catch (err) {
    next(err);
  }
});



