
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CakeDetailsCartsComponent } from '../cake-details-carts/cake-details-carts.component';

@Injectable({
  providedIn: 'root'
}) 

export class authCanDeActiveGuard implements CanDeactivate <CakeDetailsCartsComponent > {
  canDeactivate( 
    component: CakeDetailsCartsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.canDeactivate? component.canDeactivate() : true;
    }
};
 
