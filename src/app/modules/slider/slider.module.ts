import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from 'src/app/modules/slider/forecast/forecast.component';
import { IntPipe } from 'src/app/pipes/int.pipe';

import { WidgetsComponent } from './widgets/widgets.component';
import { WindWidgetComponent } from './widgets/wind-widget/wind-widget.component';
import { WindPipe } from 'src/app/pipes/wind.pipe';
import { FeelsLikeWidgetComponent } from 'src/app/modules/slider/widgets/feels-like-widget/feels-like-widget.component';
import { HumidityWidgetComponent } from './widgets/humidity-widget/humidity-widget.component';
import { SunriseWidgetComponent } from './widgets/sunrise-widget/sunrise-widget.component';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ForecastComponent,
    IntPipe,
    WidgetsComponent,
    WindWidgetComponent,
    WindPipe,
    FeelsLikeWidgetComponent,
    HumidityWidgetComponent,
    SunriseWidgetComponent,
    SliderComponent,
  ],
  exports: [SliderComponent],

  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule],
})
export class SliderModule {}
