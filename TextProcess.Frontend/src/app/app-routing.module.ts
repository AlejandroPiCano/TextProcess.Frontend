import { TextStatisticsComponent } from './components/text-statistics/text-statistics.component';
import { TextOrderComponent } from './components/text-order/text-order.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'textorder', component: TextOrderComponent },
  { path: 'textstatistics', component: TextStatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
