import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeDetailsCartsComponent } from './cake-details-carts/cake-details-carts.component';
import { LoginAdministratorComponent } from './login-administrator/login-administrator.component';
import { authCanActivateGuard } from './Services/auth-can-activate.guard';
import { authCanDeActiveGuard } from './Services/auth-can-de-active.guard';
import { CustomerCakeRequestComponent } from './customer-cake-request/customer-cake-request.component';

const routes: Routes = [
 
  { path: "", component: HomeComponent},//default navigation
  { path: "home", component: HomeComponent },
  { path: "HeadTologinPage", component: LoginAdministratorComponent},
  { path: "cake-details-cart/:id", component: CakeDetailsCartsComponent, canDeactivate: [authCanDeActiveGuard] },

  // { path: "cartsBackToHome", component: HomeComponent},
  // { path: "loginPageToHome", component: HomeComponent},
  { path: "customer-cake-request", component: CustomerCakeRequestComponent, canActivate: [authCanActivateGuard]},

  { path: "**", component: PageNotFoundComponent }//no patth
];


                                                                                                                                            //RouterModule is module which takes always 2 method forRoot and forchild and thise method takes Route which is path as a parameter.forRoot(routes)
                                                                                                                                            //RouteModule give the information to the aoo module this is route  available for routing
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule { };
