import { Component, Input, OnInit } from '@angular/core';
import { CakeDetails } from '../Models/cakeDetails';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit{
  @Input()
  cake!: CakeDetails
  
  constructor() { }

  ngOnInit(): void { }
}
