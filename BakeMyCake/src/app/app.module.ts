import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CustomerCakeRequestComponent } from './customer-cake-request/customer-cake-request.component';
import { CakeDetailsCartsComponent } from './cake-details-carts/cake-details-carts.component';
import { LoginAdministratorComponent } from './login-administrator/login-administrator.component';
import { HeaderComponent } from './header/header.component';

// Material Components
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
//
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CakeCardComponent,
    CakeListComponent,
    CustomerCakeRequestComponent,
    CakeDetailsCartsComponent,
    // AuthCanActiveComponent,
    // AuthCanDeActiveComponent,
    // AuthLoginComponent,
    // RouteNavigationComponent,
    LoginAdministratorComponent,
    HeaderComponent,
    SearchComponent,
    FilterCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    NgFor,
    MatSelectModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatDatepickerModule
    // MatFormFieldHarness,
    // MatFormFieldAppearance
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
