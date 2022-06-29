import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { FormsModule } from '@angular/forms';
import { DotsComponent } from './components/dots/dots.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotifierModule } from 'angular-notifier';
import { SliderModule } from './modules/slider/slider.module';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    DotsComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule,
    SliderModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
