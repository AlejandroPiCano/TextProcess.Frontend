import { Component, OnInit } from '@angular/core';
import { TextProcessService } from 'src/app/services/text-process.service';
import { NavBarService } from '../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-text-order',
  templateUrl: './text-order.component.html',
  styleUrls: ['./text-order.component.css']
})
export class TextOrderComponent  implements OnInit {
  constructor(
    public textProcessService: TextProcessService,
    private nav: NavBarService
  ) {}

  public textToOrder:string = "";

  public orderOptions: string[] = [];
  public selectedOrderOption: string = "";

  public textOrderResult : string [] = [];

  ngOnInit(): void {
    this.nav.show();

    this.textProcessService.GetOrderOptions().subscribe((res) => {
      if (res) {
        this.orderOptions = res;
      } else {
        alert(res.errors[0]);
      }
    });
  }


  OrderText() {
    if (!this.textToOrder) {
      alert('The field Text To Order must be have value');
      return;
    }

    this.textProcessService.GetOrderedText(this.textToOrder, this.selectedOrderOption).subscribe((res) => {

      if (res) {

        this.textOrderResult = res;
        //this.EmitUpdateSuccessfully();
      } else {
        alert(res.errors[0]);
      }
    });
  }
}
