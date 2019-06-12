import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-brightness-chart',
  templateUrl: './brightness-chart.component.html',
  styleUrls: ['./brightness-chart.component.css']
})
export class BrightnessChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [350, 500, 1020, 2200, 3120, 2800, 2600], label: 'Helligkeit' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
