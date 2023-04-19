import { Types } from 'mongoose';
import { NotFoundError, InvalidIdError, RequiredFieldsLoanError } from '../errors';
import { OperationModel } from './operations.schema';
import { OperationData, GetOperationsOptions } from './operations.types';




export async function getOperations(options: GetOperationsOptions) {
  const accountNumber = options.accountNumber

  return OperationModel.find(
    { accountNumber },
  )
}


export async function createOperation(operationData: OperationData) {
  if (operationData.type === "loan" && operationData.interest <= 0 && operationData.payments <= 0) {

    throw new RequiredFieldsLoanError("if the type is loan fiels interest and payments are mandatories")
  }

  const operation = new OperationModel(operationData);
  await operation.save();
  return operation;
}




