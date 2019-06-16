import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataService } from '../data.service';
import { Policy } from  '../policy';

@Component({
  selector: 'app-humidity-chart',
  templateUrl: './humidity-chart.component.html',
  styleUrls: ['./humidity-chart.component.css']
})
export class HumidityChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 30], label: 'Luftfeuchtigkeit' },
  ];
  policies:  Policy[];

  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,255,255,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.readHumidityData().subscribe((policies: Policy[])=>{
      this.policies = policies;
      var valArr:number[] = new Array(policies.length);
      var lblCount:number = 0;

      for(var i = 0; i < policies.length; i++) {
        valArr[i] = policies[i].value;
        
        if(lblCount == 0) {
          this.lineChartLabels.push(policies[i].timestamp.toString());
          lblCount = 5;
        }
        else {
          lblCount--;
        }
      }
      
      this.lineChartData = [{data: valArr, label: 'Luftfeuchtigkeit in %'}];
    })
  }

}
