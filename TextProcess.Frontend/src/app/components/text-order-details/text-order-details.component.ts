import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-order-details',
  templateUrl: './text-order-details.component.html',
  styleUrls: ['./text-order-details.component.css']
})
export class TextOrderDetailsComponent implements OnInit{
  @Input() public textOrderList : string [] = [];

  ngOnInit(): void {}

}
