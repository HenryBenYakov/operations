

export interface IOperation {
    accountNumber: string;
    type: string;
    amount: number;
    date: string;
    interest?: number;
    payments?: number;
    _id: string;
}


export interface IGetOperationForm {
    accountNumber: string;
}
