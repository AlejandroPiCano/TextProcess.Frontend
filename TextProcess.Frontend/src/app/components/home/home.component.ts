import { Component } from '@angular/core';
import { NavBarService } from '../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private nav: NavBarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
