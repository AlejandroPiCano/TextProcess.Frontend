import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { TextOrderComponent } from './components/text-order/text-order.component';
import { TextStatisticsComponent } from './components/text-statistics/text-statistics.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptorComponent } from './services/auth-interceptor/auth-interceptor.component';
import { TextProcessService } from './services/text-process.service';
import { StatisticsDetailsComponent } from './components/statistics-details/statistics-details.component';
import { TextOrderDetailsComponent } from './components/text-order-details/text-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TextOrderComponent,
    TextStatisticsComponent,
    HomeComponent,
    AuthInterceptorComponent,
    StatisticsDetailsComponent,
    TextOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [TextProcessService, HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorComponent, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
