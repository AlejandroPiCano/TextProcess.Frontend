import { TextStatisticsDTO } from './../../models/TextStatisticsDTO';
import { Component, OnInit } from '@angular/core';
import { TextProcessService } from 'src/app/services/text-process.service';
import { NavBarService } from '../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-text-order',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.css']
})
export class TextStatisticsComponent  implements OnInit {
  constructor(
    public textProcessService: TextProcessService,
    private nav: NavBarService
  ) {}

  public textToAnalize:string = "";
  public textStatisticsResult: TextStatisticsDTO = new TextStatisticsDTO(0,0,0);

  ngOnInit(): void {
    this.nav.show();
  }


  AnalizeText() {
    if (!this.textToAnalize) {
      alert('The field Text To Order must be have value');
      return;
    }

    this.textProcessService.GetStatisticsText(this.textToAnalize).subscribe((res) => {

      if (res) {
        // this.textToAnalize = '';

        this.textStatisticsResult = res;
        //this.EmitUpdateSuccessfully();
      } else {
        alert(res.errors[0]);
      }
    });
  }
}

