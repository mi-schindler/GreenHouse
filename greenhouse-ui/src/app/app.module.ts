import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';

import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';
import { BrightnessChartComponent } from './brightness-chart/brightness-chart.component';
import { LoggingComponent } from './logging/logging.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'log',      component: LoggingComponent },
  { path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    TemperatureChartComponent,
    HumidityChartComponent,
    BrightnessChartComponent,
    LoggingComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


