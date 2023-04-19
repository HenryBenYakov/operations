import { Types } from 'mongoose';

export interface Operation {
  _id: Types.ObjectId;
  accountNumber: string;
  type: string;
  amount: number;
  date: string;
  interest: number;
  payments: number;
}

export type OperationData = Omit<Operation, '_id'>;

export interface GetOperationsParams {
  accountNumber: string;
}

export interface GetOperationsOptions {
  accountNumber: string;
}
