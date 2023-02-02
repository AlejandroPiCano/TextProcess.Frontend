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

    this.textProcessService.GetOrderOptions().subscribe(
      {
        next:
      (res) => {
        this.orderOptions = res;
      },
       error:
        (res) => {
            let errorMessage: string = res.error && res.error.errors && res.error.errors.orderOption && res.error.errors.orderOption.length > 0 && res.error.errors.orderOption[0] ? res.error.errors.orderOption[0] : res.error.title || res.error;
            ;

            alert(`An error occurred getting the order options: ${errorMessage}`);
          }

  });
  }

  OrderText() {
    if (!this.textToOrder) {
      alert('The field Text To Order must be have value');
      return;
    }
    if (!this.selectedOrderOption) {
      alert('The field Order Option must be have value');
      return;
    }
    this.textProcessService.GetOrderedText(this.textToOrder, this.selectedOrderOption).subscribe(
      {
        next:
        (res) => {
             this.textOrderResult = res;
        },
       error:
        (res) => {
            let errorMessage: string = res.error && res.error.errors && res.error.errors.orderOption && res.error.errors.orderOption.length > 0 && res.error.errors.orderOption[0] ? res.error.errors.orderOption[0] : res.error.title || res.error;
            ;

            alert(`An error occurred sorting the text: ${errorMessage}`);
          }
  });
}
}
