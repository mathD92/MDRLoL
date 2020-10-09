import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels = [];
  public doughnutChartData = [70, 30];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
