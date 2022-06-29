import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/slider/header/header.component';
import { ForecastComponent } from './modules/slider/forecast/forecast.component';
import { IntPipe } from './pipes/int.pipe';

import { WidgetsComponent } from './modules/slider/widgets/widgets.component';
import { WindWidgetComponent } from './modules/slider/widgets/wind-widget/wind-widget.component';
import { WindPipe } from './pipes/wind.pipe';
import { FeelsLikeWidgetComponent } from './modules/slider/widgets/feels-like-widget/feels-like-widget.component';
import { HumidityWidgetComponent } from './modules/slider/widgets/humidity-widget/humidity-widget.component';
import { SunriseWidgetComponent } from './modules/slider/widgets/sunrise-widget/sunrise-widget.component';
import { FormComponent } from './modules/form/form.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './modules/slider/slider.component';
import { DotsComponent } from './modules/dots/dots.component';
import { AlertComponent } from './modules/alert/alert.component';

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
    FormComponent,
    SliderComponent,
    DotsComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
