import { Component, Input, OnInit } from '@angular/core';
import { TextStatisticsDTO } from 'src/app/models/TextStatisticsDTO';

@Component({
  selector: 'app-statistics-details',
  templateUrl: './statistics-details.component.html',
  styleUrls: ['./statistics-details.component.css']
})
export class StatisticsDetailsComponent implements OnInit{
  @Input() public textStatistics : TextStatisticsDTO = new TextStatisticsDTO(0, 0, 0);

  ngOnInit(): void {}

}
