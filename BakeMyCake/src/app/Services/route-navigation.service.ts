import { Injectable } from '@angular/core';
import { Router } from '@angular/router';//ready made 

@Injectable({
  providedIn: 'root'
})
export class RouteNavigationService {

  constructor(private router: Router) { }

  //Router is the class or readymade Service which contain navigate()
  navigateToHomeView() {
    this.router.navigate([""]); 
  }

  navigateToCustomerRequestsView() {
    this.router.navigate(["customer-cake-request"]);
  }

  
  navigateToLoginView() {
    this.router.navigate(["HeadTologinPage"]);
 }

}

