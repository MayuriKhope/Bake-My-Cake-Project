import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor() { }

  isLoggedInId:boolean=false;
  isLoggedInPass: boolean = false;
  
  login(Codes: string) {
    this.isLoggedInPass = (Codes === "M@1234");
  }

  logout() {
    this.isLoggedInPass = false;
  }
 
  loginId(id : string){
    this.isLoggedInId = (id  === "Mayuri");
  }

  logoutId(){
    this.isLoggedInId = false;
  }

  // totalBillMethod(quantity:number, cakeprice:number){
    
  // }
}
