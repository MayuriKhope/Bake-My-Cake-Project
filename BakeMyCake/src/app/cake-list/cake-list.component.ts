import { Component, OnInit } from '@angular/core';
import { CakeDetails } from '../Models/cakeDetails';
import { CakeRequestService } from '../Services/cake-request.service';
import { RouteNavigationService } from '../Services/route-navigation.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})

export class CakeListComponent implements OnInit {

  cokiees: Array<CakeDetails> = [];

  constructor(private varCakeRequestService: CakeRequestService, 
    private varRouteNavigationService :RouteNavigationService) { }

  ngOnInit(): void {
    this.varCakeRequestService.getAllCakes().subscribe({
      next:(data)=> {
        this.cokiees = data;
      },
      error:(err) => {
        alert(err);
      }
    })
    this.varCakeRequestService. getAllCakes().subscribe({
      next: data => {
        this.cokiees = data;
      },
      error: err => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  onSearchTextMethod(searchVal: any)
  {
    this.varCakeRequestService. getAllCakes().subscribe({
      next:(data) => {
        if (searchVal || searchVal !== '') {
          this.cokiees = data.filter(cake => cake.names?.toLowerCase().includes(searchVal.toLowerCase()));
        }
        else
          this.cokiees = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })

  }

    filterCake($event:any){
      this.varCakeRequestService.getAllCakes().subscribe({
        next:(data) => {
          if($event.trim()!=='')
          {
            this.cokiees = data.filter(cake =>
              cake.category.toLowerCase().includes($event.toLowerCase()));
              // this.varRouteNavigationService.navigateToHomeView()
          }
          else
          {
            this.cokiees = data;
          }
        },
        error:(err) => {
          alert(err);
        }
      });
 
      }

      // navigateTo(value:any){
      //   console.log(value);
      //   this.varRouteNavigationService.navigateToHomeById(['../',value]);
      // }

}



