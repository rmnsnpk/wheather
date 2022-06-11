import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';
import { IntPipe } from './int.pipe';

import { WidgetsComponent } from './widgets/widgets.component';
import { WindWidgetComponent } from './wind-widget/wind-widget.component';
import { WindPipe } from './wind.pipe';
import { FeelsLikeWidgetComponent } from './feels-like-widget/feels-like-widget.component';
import { HumidityWidgetComponent } from './humidity-widget/humidity-widget.component';
import { SunriseWidgetComponent } from './sunrise-widget/sunrise-widget.component';
import { TimePipe } from './time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent,
    IntPipe,
    WidgetsComponent,
    WindWidgetComponent,
    WindPipe,
    FeelsLikeWidgetComponent,
    HumidityWidgetComponent,
    SunriseWidgetComponent,
    TimePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
