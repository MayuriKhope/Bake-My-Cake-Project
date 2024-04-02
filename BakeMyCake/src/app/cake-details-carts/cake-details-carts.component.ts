import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeDetails } from '../Models/cakeDetails'; 
import { CustomerDetails } from '../Models/cakeOrderDetails';
import { CustomerRequestService } from '../Services/customer-request.service';
import { CakeRequestService } from '../Services/cake-request.service';
import { RouteNavigationService } from '../Services/route-navigation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  AbstractControl, AsyncValidatorFn, FormBuilder,  ValidationErrors,  Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-cake-details-carts',
  templateUrl: './cake-details-carts.component.html',
  styleUrls: ['./cake-details-carts.component.css']
})
export class CakeDetailsCartsComponent implements OnInit  {

  Cakes?: CakeDetails;
  stars: Array<number> = [];
  Customer: CustomerDetails = {};
  // minDate = new Date();

  submitStatus:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private varCakeRequestService : CakeRequestService ,
    private varCustomerRequestService: CustomerRequestService,
    private varRouteNavigationService: RouteNavigationService,
    private snackBar: MatSnackBar,
    private varFormBuilder:FormBuilder,
) { }

  customerForm = this.varFormBuilder.group({
      customerName: ['',Validators.pattern(/^[A-Za-z]{3,30}$/)],
      customerEmail: ['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],     
      customerPhone: ['', Validators.pattern(/^[789]\d{9,9}$/)],
      dateOfOrder: ['', Validators.required],
      quantity: ['', Validators.pattern(/^[^'\-]/)],
      address: this.varFormBuilder.group({
              street: ['',Validators.required],
              city: ['',Validators.required],
              state: ['',Validators.required],
              pinCode: ['',Validators.pattern(/^[0-9]{5,6}$/)]
               })

   });


  get customerName() { return this.customerForm.get("customerName") }
  get customerEmail() { return this.customerForm.get("customerEmail") }
  get customerPhone() { return this.customerForm.get("customerPhone") }
  get street (){ return this.customerForm.get("street") }
  get city(){ return this.customerForm.get("city") }
  get state(){ return this.customerForm.get("state")}
  get pinCode(){ return this.customerForm.get("pinCode")}
  get quantity() { return this.customerForm.get("quantity") }
  get dateOfOrder() { return this.customerForm.get("dateOfOrder") }


    ngOnInit(): void 
    {
      this.activatedRoute.paramMap.subscribe(param => {
          let id = param.get("id") ?? "";
          this.varCakeRequestService.getIndividualCake(id).subscribe((data) => {
              this.Cakes = data;
              this.stars = new Array(this.Cakes.ratings);
              this.submitStatus = false;
              this.Customer.totalAmount=this.Cakes.price;
          })
      })
    }


  makeRequest() {
 
    if ( this.Customer.customerName  && this.Customer.customerEmail && this.Customer.customerPhone 
       && this.Customer.quantity && this.Customer.street &&
      this.Customer.city && this.Customer.state && this.Customer.pinCode && this.Customer.totalAmount)
    {
      this.Customer.cakeName = this.Cakes?.names;                                                                                                             //here we are giving same name of cake from cake and customer cake
      this.varCustomerRequestService.saveCakesRequest(this.Customer).subscribe({
        next: data=> {
          this.snackBar.open("ThankYou For Making The Order.Visit Us Again", "", {
            duration: 3000
          });
          this.submitStatus = true; 
          this.varRouteNavigationService.navigateToHomeView();
        },
        error:(err)=> {
          alert(err);
        }
      })
    }
  }


  canDeactivate() 
   {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted a request for this Cake. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
   }


   TotalAmount() {
    if (this.Customer.quantity && this.Cakes) {
      if(this.Customer.quantity>0 && this.Cakes?.price >0)
      {
        this.Customer.totalAmount = this.Cakes?.price * this.Customer.quantity;
      }
    }
    else {
    this.Customer.totalAmount = 0;
    }
    }
}


