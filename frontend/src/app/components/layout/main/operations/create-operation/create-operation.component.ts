import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IOperation } from '../../../../../interface/operation';

@Component({
  selector: 'app-create-operation',
  templateUrl: './create-operation.component.html',
  styleUrls: ['./create-operation.component.css']
})
export class CreateOperationComponent implements OnInit {

  selectedType: string = ""
  loanFieldsValidateOnSubmit: boolean = false




  formGroup = {
    accountNumber: ['', [Validators.required, Validators.minLength(4)]],
    type: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(1), Validators.max(2000000)]],
    date: ['', [Validators.required, Validators.minLength(1)]],
    interest: [0, []],
    payments: [0, []],
  }





  operationForm = this.formBuilder.group(this.formGroup);


  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }


  async ngOnInit(): Promise<void> {

  }


  get accountNumber() {
    return this.operationForm.get('accountNumber');
  }
  get type() {
    return this.operationForm.get('type');
  }
  get amount() {
    return this.operationForm.get('amount');
  }
  get date() {
    return this.operationForm.get('date');
  }
  get interest() {
    return this.operationForm.get('interest');
  }
  get payments() {
    return this.operationForm.get('payments');
  }

  onTypeChange(newSelectedType: string) {

    this.selectedType = newSelectedType
    // if (newSelectedType === "loan") {
    //   this.formGroup.interest = [0, [Validators.required, Validators.min(1), Validators.max(80)]];
    //   this.formGroup.payments = [0, [Validators.required, Validators.min(1), Validators.max(36)]];
    // } else {
    //   this.formGroup.interest = [0, []];
    //   this.formGroup.payments = [0, []];

    // }

  }







  async save() {
    if (
      (this.operationForm.value as IOperation).type === "loan" &&
      (
        (this.operationForm.value as IOperation).interest! <= 0 ||
        (this.operationForm.value as IOperation).interest! > 80 ||
        (this.operationForm.value as IOperation).payments! <= 0 ||
        (this.operationForm.value as IOperation).payments! > 36

      )
    ) {

      this.loanFieldsValidateOnSubmit = true
    }

    else {

      await this.apiService.createOperation(this.operationForm.value as IOperation);
      this.router.navigate(["operations"], { queryParams: { accountNumber: (this.operationForm.value as IOperation).accountNumber } });
    }
  }
}


