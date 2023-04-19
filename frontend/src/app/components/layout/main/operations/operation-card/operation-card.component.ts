import { Component, Input, OnInit } from '@angular/core';
import { IOperation } from '../../../../../interface/operation';

@Component({
  selector: 'app-operation-card',
  templateUrl: './operation-card.component.html',
  styleUrls: ['./operation-card.component.css']
})
export class OperationCardComponent {

  constructor() { }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString("HE-il")

  }


  @Input()
  operation: IOperation = {
    accountNumber: '',
    type: '',
    amount: 0,
    date: '',
    _id: '',
    interest: 0,
    payments: 0
  }

}
