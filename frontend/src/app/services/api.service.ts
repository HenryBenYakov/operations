import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IOperation } from '../interface/operation';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }



  async getOperations(accountNumber: string) {

    try {

      return this.httpClient
        .get<IOperation[]>(`${environment.apiUrl}/api/v1/operations?accountNumber=${accountNumber}`)
        .toPromise();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  async createOperation(operation: IOperation) {
    try {

      return this.httpClient
        .post<IOperation>(`${environment.apiUrl}/api/v1/operations`, operation)
        .toPromise();
    } catch (err) {
      console.log(err);
      throw err;
    }

  }
}