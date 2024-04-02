import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { CustomerDetails } from '../Models/cakeOrderDetails';
// import { CakeDetails } from '../Models/cakeDetails';
import { CustomerRequestService } from '../Services/customer-request.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-cake-request',
  templateUrl: './customer-cake-request.component.html',
  styleUrls: ['./customer-cake-request.component.css']
})
export class CustomerCakeRequestComponent implements OnInit{

  displayedColumns: string[] = ['customerName','customerEmail',  'customerPhone', 'cakeName','dateOfOrder', 'street', 'city', 'state', 'pinCode','quantity', 'totalAmount'];

  dataSource!:MatTableDataSource<any>;

  varCustomerDetails: CustomerDetails[] = [];

  
  constructor(private varCustomerRequestService : CustomerRequestService) { }

  ngOnInit(): void {
    this.varCustomerRequestService.getAllCakesReqeusts().subscribe({
      next: (data) => {
        this.varCustomerDetails = data;
        this.dataSource = new MatTableDataSource(this.varCustomerDetails);
        this.dataSource.paginator = this.varPaginator;
        this.dataSource.sort=this.varMatsort;
      },
      error: (err) => {
        alert(err);
      }
    });
  }

  @ViewChild(MatSort) varMatsort !: MatSort;

  @ViewChild(MatPaginator) varPaginator!: MatPaginator;

  filterDataMethod(varStriong:any){
    // this.dataSource.filter=varStriong.target.value;
    const filterValue = (varStriong.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


