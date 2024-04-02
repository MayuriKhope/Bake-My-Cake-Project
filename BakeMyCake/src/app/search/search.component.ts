import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { CakeDetails } from '../Models/cakeDetails';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
 
    varsearchText: string = "";
  
    @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }
    ngOnInit(): void {}
                                              
    searchMethod() {    
      this.searchTextChanged.emit(this.varsearchText);
    }

  }
  