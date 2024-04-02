import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../Services/auth-login.service'; 
import { RouteNavigationService } from '../Services/route-navigation.service'; 
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit{

  
  varfaLock = faLock;
  constructor(private varAuthLoginService: AuthLoginService, private varRouteNavigationService : RouteNavigationService ) { };

  securityCode:string="";
  AdminId:string="";
  
  validateCustomerGuideCode() {
    this.varAuthLoginService.login(this.securityCode);//true
    this.varAuthLoginService.loginId(this.AdminId); //true
    if(this.varAuthLoginService.isLoggedInPass && this.varAuthLoginService.isLoggedInId) {
        this.varRouteNavigationService.navigateToCustomerRequestsView();
    }
  }

  ngOnInit(): void { }
  
}
