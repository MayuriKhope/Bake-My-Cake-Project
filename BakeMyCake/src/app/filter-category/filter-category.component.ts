import { Component, EventEmitter, Output, OnInit  } from '@angular/core';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit{

    varfilter:string = '';

    ngOnInit(): void { };
    
    @Output()
    filterTextChanged:EventEmitter<any> = new EventEmitter<any>();
  
    filterMethod(){
      console.log('filterComponent method');
      this.filterTextChanged.emit(this.varfilter);
      console.log('filterComponent method after');
    }
  
}

