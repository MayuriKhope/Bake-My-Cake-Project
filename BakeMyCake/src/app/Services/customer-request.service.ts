import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../Models/cakeOrderDetails'; 

@Injectable({
  providedIn: 'root'
})

export class CustomerRequestService {

  URL: string = "http://localhost:3000/CustomersRequestDetailsArray";
  constructor(private http: HttpClient) { }

  getAllCakesReqeusts() : Observable<Array<CustomerDetails>> {
    return this.http.get<Array<CustomerDetails>>(`${this.URL}`);
  }

  saveCakesRequest(cakeRequest? : CustomerDetails) : Observable<CustomerDetails> {
    return this.http.post<CustomerDetails>(`${this.URL}`, cakeRequest)
  }

}



