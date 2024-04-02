
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthLoginService } from './auth-login.service'; 
import { RouteNavigationService } from './route-navigation.service'; 

@Injectable({
  providedIn: 'root'
})

export class authCanActivateGuard implements CanActivate {

  constructor(private  varAuthLoginService :  AuthLoginService, private varrouteService: RouteNavigationService){ };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.varAuthLoginService.isLoggedInPass)
    {
        this.varrouteService.navigateToLoginView();
        return false;
    }
    else
        return true;
  }
};

