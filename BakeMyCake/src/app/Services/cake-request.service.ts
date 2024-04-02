import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CakeDetails } from '../Models/cakeDetails'; 

@Injectable({
  providedIn: 'root'
})

export class CakeRequestService {

 
  URL: string = "http://localhost:3000/CakesRequestDetailsArray";
  constructor(private http: HttpClient) { }

  getAllCakes(): Observable<Array<CakeDetails >> {
    return this.http.get<Array<CakeDetails >>(this.URL)
  }

  getIndividualCake(id?: string) : Observable<CakeDetails >{
    console.log(id);
    return this.http.get<CakeDetails >(`${this.URL}/${id}`);
  }
  
}


