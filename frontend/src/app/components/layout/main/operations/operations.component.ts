import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { IGetOperationForm } from 'src/app/interface/operation';
import { IOperation } from '../../../../interface/operation';



@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  operations: IOperation[] = []
  accountNumberFromParams = this.activatedRoute.snapshot.queryParams['accountNumber']

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {

  }


  async getOperationsFromServer(accountNumber: string) {

    const operationsFromServer = await this.apiService.getOperations(accountNumber)
    if (operationsFromServer) this.operations = operationsFromServer

  }


  onGetOperationsClick = async () => {

    console.log(this.getOperationsForm.value as IGetOperationForm)
    this.getOperationsFromServer((this.getOperationsForm.value as IGetOperationForm).accountNumber)


  }

  getOperationsForm = this.formBuilder.group({
    accountNumber: ['', [Validators.required, Validators.minLength(2)]],
  });



  get accountNumber() {
    return this.getOperationsForm.get('accountNumber');
  }


  ngOnInit(): void {
    if (this.accountNumberFromParams) {
      this.getOperationsFromServer(this.accountNumberFromParams)
    }


  }




}
